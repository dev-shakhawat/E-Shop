import React from 'react';
import ViewAll from "../common/ViewAll.jsx";

function BestSellerLeft() {
    return (
        <div>
            <h2 className=" flex justify-between  ">
                <span
                    className={`commonHead`}>Featured Products</span>
                <ViewAll/>
            </h2>
        </div>
    );
}

export default BestSellerLeft;
