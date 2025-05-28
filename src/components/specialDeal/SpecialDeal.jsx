import React from 'react';
import Container from "../common/Container.jsx";


import {Link} from "react-router";

function SpecialDeal() {
    return (
        <Container>
            <div className="flex gap-3 md:gap-6 md:flex-row flex-col">
                {/*  left part  */}
                <div>
                    <Link to={`#`}><img src="/images/specialdealone.png" alt="specialdealone"/></Link>
                </div>


                {/*  right part  */}
                <div>
                    <Link to={`#`}><img src="/images/specialdealtwo.png" alt="specialdealtwo"/></Link>
                </div>
            </div>
        </Container>
    );
}

export default SpecialDeal;
