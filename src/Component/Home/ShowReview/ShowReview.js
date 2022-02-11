import React, { useEffect, useState } from "react";

const ShowProducts = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bikedatas")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <h4>This products page</h4>
    </div>
  );
};

export default ShowProducts;
