import React from 'react';
import Container from "../common/Container.jsx";
import Button from "../common/Button.jsx";

function FooterTop() {
    return (
        <Container>
            <div
                className="rounded-[25px] bg-[linear-gradient(90deg,_rgba(244,244,244,1)_0%,_rgba(244,244,244,1)_44%,_rgba(217,217,217,1)_50%,_rgba(217,217,217,1)_100%)]
                lg:px-[100px] px-6 sm:px-16 md:px-20 lg:py-[114px] py-10 sm:py-1.5 md:py-20   ">

                {/*  text  */}
                <h2 className=" font-semibold font-poppins text-primary text-xl sm:text-2xl md:text-[30px] lg:text-[36px] leading-[46px]  ">Get
                    Our
                    Updates</h2>
                <p className="font-montserrat text-base md:text-[18px]  lg:text-[20px] leading-[30px] text-primary mt-2  lg:mt-4 lg:max-w-[488px] ">Browse
                    our
                    wide
                    selection
                    of
                    electronics and
                    find the perfect promo for you from newsletter.</p>

                <div className="flex flex-col ">
                    {/* input box */}
                    <input type="srarch" placeholder={`Enter your email address ...`}
                           className={`outline-none border lg:border-2 border-secondery pl-2 md:l-4 lg:pl-6 py-2 md:py-4 lg:py-4.5 pr-11 mt-8 max-w-[494px] text-primary  w-full lg:rounded-[10px] rounded-[5px] bg-white  `}/>

                    {/*  button  */}
                    <Button text={`Subscribe`}
                            style={` mt-5 sm:mt-7 md:mt-10   lg:mt-16 py-1.5 md:py-4 px-6 md:px-10  `}/>
                </div>
            </div>
        </Container>
    );
}

export default FooterTop;
