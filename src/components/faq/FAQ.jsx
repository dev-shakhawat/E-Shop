import React from 'react';
import Container from "../common/Container.jsx";
import Accordian from "../accordian/Accordian.jsx";

// shap
import faqShap from "../../assets/images/faqShap.png";
import Button from "../common/Button.jsx";

function Faq() {

    const accordians = [
        {
            title: "What payment methods do you accept?",
            description: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by",
            open: false
        },
        {
            title: "How long does the product shipping take?",
            description: "logging into your account and viewing your order history.",
            open: false
        },
        {
            title: "Do you offer international shipping?",
            description: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by\n" +
                "logging into your account and viewing your order history.",
            open: false
        },
        {
            title: "Can I track my order?",
            description: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by\n" +
                "logging into your account and viewing your order history.",
            open: true
        },
    ]
    return (
        <div className={` py-4 sm:py-4 md:py-12 lg:py-16 bg-[#f4f4f4]`}>
            <Container>
                <div className="flex lg:flex-row flex-col-reverse relative">
                    {/*  accordian part  */}
                    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 lg:min-w-[926px] lg:mr-[112px] ">
                        {accordians.map((acc, index) => <Accordian key={index} title={acc.title}
                                                                   description={acc.description}
                                                                   open={acc.open}
                        />)}
                    </div>

                    {/*  faq part  */}
                    <div className="lg:mt-auto mt-5 lg:pb-0 pb-5 ">
                        <img src={faqShap} alt="faqShap" className={`absolute top-0 right-0 lg:inline-block hidden `}/>
                        <h2 className=" font-poppins font-semibold text-xl sm:text-[24px] md:text-[30px] lg:text-[36px] leading-[46px] text-primary lg:w-[306px]  ">Frequently
                            Asked Questions</h2>
                        <p className="font-montserrat font-normal text-[13px] md:text-base lg:text-xl lg:leading-[30px] mt-2 md:mt-4 lg:mt-6 w-[85%]  ">Questions
                            that
                            get
                            asked the
                            most by
                            our clients. Get any burning questions?</p>
                        <Button style={` mt-5 sm:mt-7 md:mt-10   lg:mt-16 py-1.5 md:py-4 px-6 md:px-10  `}
                                text={`Ask A Question`}/>

                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Faq;
