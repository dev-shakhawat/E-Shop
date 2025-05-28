import React from 'react';
import Container from "../common/Container.jsx";

// icons
import CustomerCare from "../../assets/icons/CustomerCare.jsx";
import Security from "../../assets/icons/Security.jsx";
import Delevery from "../../assets/icons/Delevery.jsx";
import Transparent from "../../assets/icons/Transparent.jsx";
import FacilityCart from "./FacilityCart.jsx";

function Facility() {

    const facilities = [
        {icon: <CustomerCare/>, title: "Responsive", text: "Customer service available 24/7"},
        {icon: <Security/>, title: "Secure", text: "Certified marketplace since 2017"},
        {icon: <Delevery/>, title: "Shipping", text: "Free, fast, and reliable worldwide"},
        {icon: <Transparent/>, title: "Transparent", text: "Hassle-free return policy"},
    ]
    return (
        <div>
            <Container>
                <div className="flex justify-between flex-wrap lg:flex-nowrap gap-y-5 ">
                    {facilities.map((facility, index) => <FacilityCart key={index} icon={facility.icon}
                                                                       title={facility.title} text={facility.text}/>)}
                </div>
            </Container>
        </div>
    );
}

export default Facility;
