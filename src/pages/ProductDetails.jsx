import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ProductImage from '../components/productDetails/ProductImage';
import Container from '../components/common/Container';
import ShortDetails from '../components/productDetails/ShortDetails';

function ProductDetails() {
    return (
        <Container>

            
            {/* Breadcrumb */}
            <Breadcrumb/>

            {/* detailes */}
            <div className="flex">

                {/* product image */}
                <div className="w-1/2"><ProductImage/></div>
                


                {/* product detailes */}
                <div className="ml-[56px] w-full">
                    <ShortDetails/>
                </div>

            </div>
        </Container>
    );
}

export default ProductDetails;