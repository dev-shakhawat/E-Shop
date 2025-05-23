import React from 'react';
import Button from "../common/Button.jsx";

function SpringCounter() {
    return (
        <div>

            <h2 className="font-poppins font-bold text-[56px] leading-[68px] text-primary">Spring Sale</h2>

            {/*  counter down  */}
            <div className="mt-10">counter down</div>


            {/*  button  */}
            <Button text={`Shop Now`} style={`px-10 py-4 mt-18`}/>
        </div>
    );
}

export default SpringCounter;
