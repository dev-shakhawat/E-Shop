import React from 'react';
import Container from "../common/Container.jsx";
import ProductCart from "../common/ProductCart.jsx";

function FeaturedProduct() {
    return (
        <div className={`py-20`}>
            <Container>
                <div className="flex gap-1">
                    <ProductCart catagory={`audio`} title={`JPhone 13 High Quality Value Buy Best Cam...`}
                                 currentprice={999.00} delprice={345} rating={5} totalrating={10}/>
                    <ProductCart catagory={`audio`}
                                 title={`JPhone 13 High Quality Value Buy Best Cam...`}
                                 currentprice={999.00} delprice={345} persent={50} rating={3}
                                 totalrating={50}/>
                    <ProductCart catagory={`audio`} title={`JPhone 13 High Quality Value Buy Best Cam...`}
                                 currentprice={999.00} rating={2} totalrating={200}/>
                    <ProductCart catagory={`audio`}
                                 title={`JPhone 13 High Quality Value Buy Best Cam...`}
                                 currentprice={999.00} delprice={345} rating={4} totalrating={110}/>
                    <ProductCart catagory={`audio`}
                                 title={`JPhone 13 High Quality Value Buy Best Cam...`}
                                 currentprice={999.00} delprice={345} rating={1} totalrating={90}/>
                </div>
            </Container>

        </div>
    );
}

export default FeaturedProduct;
