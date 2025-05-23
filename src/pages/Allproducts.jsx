import React from 'react';
import Container from "../components/common/Container.jsx";
import CatagoryChooser from "../components/catagoryChooser/CatagoryChooser.jsx";

function Allproducts() {
    return (
        <div className={`mt-17 pb-20`}>
            <Container>
                <div className="flex">

                    {/*  catagory/brand/price chooser  */}
                    <div className="min-w-[335px] bg-[#F4F4F4] rounded-[25px] p-12">

                        {/*  catagory chooser  */}
                        <CatagoryChooser/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Allproducts;
