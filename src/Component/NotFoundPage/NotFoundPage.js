import React from 'react';
import img from "../../Images/NotFoundPage.jpg"
import Footer from '../Footer/Footer';

const NotFoundPage = () => {
    return (
        <div>
            <img style={{width:"100%",height: "100vh",objectFit:'cover'}} src={img} alt="Page Not Found"/>
            <Footer></Footer>
        </div>
    );
};

export default NotFoundPage;