import React from 'react';
import Banner from '../MoreProducts/Banner/Banner';
import ProductCart from './ProductsCart/ProductCart';
import ShowReview from './ShowReview/ShowReview';

const home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCart></ProductCart>
            <ShowReview></ShowReview>
        </div>
    );
};

export default home;