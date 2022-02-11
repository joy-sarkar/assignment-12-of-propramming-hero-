import React from "react";
import Footer from "../Footer/Footer";
import Banner from "../MoreProducts/Banner/Banner";
import Newsletter from "./NewsLetter/Newsletter";
import ShowProducts from "./ShowReview/ShowReview";
import ProductCart from "./ProductsCart/ProductCart";

const home = () => {
  return (
    <div>
      <Banner></Banner>
      <ShowProducts></ShowProducts>
      <ProductCart></ProductCart>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default home;
