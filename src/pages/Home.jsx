import React from 'react';
import Container from "../components/common/Container.jsx";
import Button from "../components/common/Button.jsx";

function Home() {
    return (
        <div>
            {/*  banner part  */}
            <div className="mt-8">
                <Container>
                    <div className="py-[139px] rounded-[15px] px-[108px]  "
                         style={{backgroundImage: "url('/images/banner.png')"}}>
                        <h1 className={`font-poppins font-bold text-[56px] leading-17 max-w-[503px]  `}>Your One-Stop
                            Electronic Market</h1>
                        <p className="text-primary font-montserrat text-xl leading-[30px] mt-4 max-w-[514px]  ">Welcome
                            to e-shop, a place where you can buy everything about electronics. Sale every day!</p>

                        <Button style={`mt-8 py-4 px-10 `} text="Shop Now"/>

                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Home;
