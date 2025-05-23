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
        <div className={`pt-20 pb-25`}>
            <Container>
                {/*   head   */}
                <div className="flex justify-between items-end">
                    <div className="">
                        <h2 className="commonHead">Tech Talk</h2>
                        <p className="font-montserrat  font-normal text-xl leading-[30px] text-primary mt-6">Stay up to
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
                <div className="grid grid-cols-3 mt-12">
                    {techtalkdata.map((data, index) => <TechTalkCart key={index} title={data.title}
                                                                     buttontxt={data.buttontxt}
                                                                     buttonlink={data.buttonlink} date={data.date}/>)}
                </div>

            </Container>
        </div>
    );
}

export default TechTalk;
