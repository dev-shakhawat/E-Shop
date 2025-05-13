import React from 'react';
import Container from "../common/Container.jsx";
import Button from "../common/Button.jsx";

function FooterTop() {
    return (
        <Container>
            <div
                className="rounded-[25px] bg-[linear-gradient(90deg,_rgba(244,244,244,1)_0%,_rgba(244,244,244,1)_44%,_rgba(217,217,217,1)_50%,_rgba(217,217,217,1)_100%)] px-[100px] py-[114px]   ">

                {/*  text  */}
                <h2 className=" font-semibold font-poppins text-primary text-[36px] leading-[46px]  ">Get Our
                    Updates</h2>
                <p className="font-montserrat text-[20px] leading-[30px] text-primary mt-4 max-w-[488px] ">Browse our
                    wide
                    selection
                    of
                    electronics and
                    find the perfect promo for you from newsletter.</p>

                <div className="flex flex-col ">
                    {/* input box */}
                    <input type="srarch" placeholder={`Enter your email address ...`}
                           className={`outline-none border-2 border-secondery pl-6 py-4.5 pr-11 mt-8 max-w-[494px] text-primary  w-full rounded-[10px]  `}/>

                    {/*  button  */}
                    <Button text={`Subscribe`} type={`button`}/>
                </div>
            </div>
        </Container>
    );
}

export default FooterTop;
