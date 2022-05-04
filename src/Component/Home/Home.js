import React from "react";
import Footer from "../Footer/Footer";
import Banner from "../MoreProducts/Banner/Banner";
import Newsletter from "./NewsLetter/Newsletter";
import ShowProducts from "./ShowReview/ShowReview";
import ProductCart from "./ProductsCart/ProductCart";
import ShowReview from "./ShowReview/ShowReview";

const home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProductCart></ProductCart>
      <ShowProducts></ShowProducts>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default home;
