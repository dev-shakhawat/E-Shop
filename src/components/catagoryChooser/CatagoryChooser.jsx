import React, {useState} from 'react';
import ArrowDown from "../../assets/icons/ArrowDown.jsx";

function CatagoryChooser() {

    const [isopen, setIsopen] = useState(false)
    return (
        <div>
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsopen(!isopen)}>
                <h3 className="font-montserrat font-bold text-xl leading-[30px] text-primary">Categories</h3>
                {isopen ? <ArrowDown style={`rotate-[180deg]`}/> : <ArrowDown/>}


                {/*  all catagories list  */}
                <div className=""></div>

            </div>
        </div>
    );
}

export default CatagoryChooser;
