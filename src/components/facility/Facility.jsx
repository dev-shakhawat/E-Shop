import React from 'react';
import Container from "../common/Container.jsx";

// icons
import CustomerCare from "../../icons/facility/CustomerCare.jsx";
import Security from "../../icons/facility/Security.jsx";
import Delevery from "../../icons/facility/Delevery.jsx";
import Transparent from "../../icons/facility/Transparent.jsx";
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
                <div className="flex justify-between ">
                    {facilities.map((facility, index) => <FacilityCart key={index} icon={facility.icon}
                                                                       title={facility.title} text={facility.text}/>)}
                </div>
            </Container>
        </div>
    );
}

export default Facility;
