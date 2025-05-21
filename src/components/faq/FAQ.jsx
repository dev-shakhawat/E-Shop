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
        <div className={`py-16 bg-[#f4f4f4]`}>
            <Container>
                <div className="flex relative">
                    {/*  accordian part  */}
                    <div className="flex flex-col gap-6 min-w-[926px] mr-[112px] ">
                        {accordians.map((acc, index) => <Accordian key={index} title={acc.title}
                                                                   description={acc.description}
                                                                   open={acc.open}
                        />)}
                    </div>

                    {/*  faq part  */}
                    <div className="mt-auto">
                        <img src={faqShap} alt="faqShap" className={`absolute top-0 right-0`}/>
                        <h2 className=" font-poppins font-semibold text-[36px] leading-[46px] text-primary w-[306px]  ">Frequently
                            Asked Questions</h2>
                        <p className="font-montserrat font-normal text-xl leading-[30px] mt-6 w-[85%]  ">Questions that
                            get
                            asked the
                            most by
                            our clients. Get any burning questions?</p>
                        <Button style={`mt-16 px-10 py-4  `} type={`button`} text={`Ask A Question`}/>

                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Faq;
