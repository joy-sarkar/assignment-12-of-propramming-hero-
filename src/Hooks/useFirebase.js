import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initFirebase from "../Firebase/Firebase.init";
// firebase Intiolize
initFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  //   sign in with google in pop up
  const singInUsingGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user
        setUser(user);
        saveUser(user.email, user.displayName, 'PUT');
        // redirect ui
        sessionStorage.setItem("email", "result.user.email");
        const redirect_uri = location.state?.from || "/";
        history.push(redirect_uri);
        setError(" ");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // log in with email and password
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const redirect_uri = location.state?.from || "/";
        history.push(redirect_uri);
        const user = result.user;
        sessionStorage.setItem("email", "result.user.email");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // create new user with email and password
  const registerUser = (email, password, name,history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        sessionStorage.setItem("email", "result.user.email");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to data base 
        saveUser(email, name, 'POST');
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {});
        // log In after redirects
        history.push('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      })
      .finally(() => setIsLoading(false));
  };
  //   log out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false))

      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // save user in database 
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}
  return {
    user,
    error,
    logOut,
    loginUser,
    isLoading,
    singInUsingGoogle,
    registerUser,
  };
};
export default useFirebase;
