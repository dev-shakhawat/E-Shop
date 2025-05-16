import React from 'react';
import Container from "../common/Container.jsx";
import Product from "../common/Product.jsx";

function FeaturedProduct() {
    return (
        <div className={`py-20`}>
            <Container>
                <div className="flex gap-1">
                    <Product catagory={`audio`} title={`JPhone 13 High Quality Value Buy Best Cam...`}
                             currentprice={999.00} delprice={345}/>
                    <Product catagory={`audio`}
                             title={`JPhone 13 High Quality Value Buy Best Cam...`}
                             currentprice={999.00} delprice={345}/>
                    <Product catagory={`audio`} title={`JPhone 13 High Quality Value Buy Best Cam...`}
                             currentprice={999.00}/>
                    <Product catagory={`audio`}
                             title={`JPhone 13 High Quality Value Buy Best Cam...`}
                             currentprice={999.00} delprice={345}/>
                    <Product catagory={`audio`}
                             title={`JPhone 13 High Quality Value Buy Best Cam...`}
                             currentprice={999.00} delprice={345}/>
                </div>
            </Container>

        </div>
    );
}

export default FeaturedProduct;
