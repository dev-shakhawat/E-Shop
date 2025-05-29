import React from 'react';
import Container from "../common/Container.jsx";
import ViewAll from "../common/ViewAll.jsx";
import {data} from "react-router";
import TechTalkCart from "./TechTalkCart.jsx";

function TechTalk() {

    const techtalkdata = [
        {
            title: "Our Category Choices for Top 10 Tech Gadgets in 2023",
            buttontxt: "Gadgets",
            btnlink: "#",
            date: "10 April 2023"
        },
        {
            title: "How to Choose the Right Laptop for Your Needs: Our Expert Says",
            buttontxt: "Tips",
            btnlink: "#",
            date: "12 April 2023"
        },
        {
            title: "High Quality vs Price: Why You Should Upgrade to A Smart TV?",
            buttontxt: "Review",
            btnlink: "#",
            date: "16 April 2023"
        },
    ]
    return (
        <div className={` pt-5 sm:pt-10 md:pt-15 lg:pt-20 `}>
            <Container>
                {/*   head   */}
                <div className="flex justify-between items-end">
                    <div className="w-[70%] lg:w-auto  ">
                        <h2 className="commonHead">Tech Talk</h2>
                        <p className="font-montserrat  font-normal text-[13px] md:text-base lg:text-xl lg:leading-[30px] text-primary mt-2 md:mt-4 lg:mt-6">Stay
                            up
                            to
                            date
                            with
                            the
                            latest trends, reviews, and
                            insights from our
                            experts.</p>
                    </div>

                    <ViewAll/>
                </div>


                {/*  techtalk carts  */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-3 sm:mt-6 md:mt-9 lg:mt-12">
                    {techtalkdata.map((data, index) => <TechTalkCart key={index} title={data.title}
                                                                     buttontxt={data.buttontxt}
                                                                     buttonlink={data.buttonlink} date={data.date}/>)}
                </div>

            </Container>
        </div>
    );
}

export default TechTalk;
