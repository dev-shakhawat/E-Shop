import React, {useEffect, useRef, useState} from 'react';
import ArrowDown from "../../../assets/icons/ArrowDown.jsx";
import CheckboxOutline from "../../../assets/icons/CheckboxOutline.jsx";
import CheckboxChecked from "../../../assets/icons/CheckboxChecked.jsx";

function Chooser({allcatagories}) {
    const [isopen, setIsopen] = useState(true);
    const catagoryRef = useRef(null);
    const [catagoryHeight, setCatagoryHeight] = useState(0);
    const [checkedCategories, setCheckedCategories] = useState({});

    useEffect(() => {
        if (isopen) {
            setCatagoryHeight(catagoryRef.current.scrollHeight);
        } else {
            setCatagoryHeight(0);
        }
    }, [isopen]);

    const handleCheckboxChange = (categoryId) => {
        setCheckedCategories(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
    };
    

    return (
        <div>
            {/* Category chooser head */}
            {/*   catagory chooser head    */}
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsopen(!isopen)}>
                <h3 className="font-montserrat font-bold text-xl leading-[30px] text-primary">Categories</h3>
                {isopen ? <ArrowDown style={` duration-400 w-[11px] h-[6px] rotate-[180deg] `}/> :
                    <ArrowDown style={`duration-400 w-[11px] h-[6px] rotate-[0deg]`}/>}
            </div>

            {/* All categories list */}
            {isopen  &&
                <div 
                    ref={catagoryRef} 
                    className="flex flex-col gap-y-3 overflow-hidden transition-all duration-400 mt-5"
                    style={{height: `${catagoryHeight}px`}}
                >
                    {allcatagories.map((category, index) => (
                        <label 
                            key={category.id || index}
                            className="flex gap-x-2 font-montserrat font-normal text-base leading-[24px] text-primary cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={!!checkedCategories[category.id || index]}
                                onChange={() => handleCheckboxChange(category.id || index)}
                                className="hidden"
                            />
                            {checkedCategories[category.id || index] ? (
                                <CheckboxChecked className={`w-5 h-5`} />
                            ) : (
                                <CheckboxOutline className={`w-5 h-5`} />
                            )}
                            <p className="flex justify-between w-full">
                                <span>{category.name}</span>
                                {category.total && <span>({category.total})</span>}
                            </p>
                        </label>
                    ))}
                </div>
            }
        </div>
    );
}

export default Chooser;