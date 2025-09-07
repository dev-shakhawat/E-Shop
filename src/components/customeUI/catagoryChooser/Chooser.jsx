import React, {useEffect, useRef, useState} from 'react';
import ArrowDown from "../../../assets/icons/ArrowDown.jsx";
import CheckboxOutline from "../../../assets/icons/CheckboxOutline.jsx";
import CheckboxChecked from "../../../assets/icons/CheckboxChecked.jsx";

function Chooser({allcatagories , urlSearchParams , setUrlSearchParams , type}) {
    const [isopen, setIsopen] = useState(true);
    const catagoryRef = useRef(null);
    const [catagoryHeight, setCatagoryHeight] = useState(0);
    const [checkedCategories, setCheckedCategories] = useState({});
 
    

    useEffect(() => {
        if (isopen) {
            setCatagoryHeight(300);
        } else {
            setCatagoryHeight(0);
        }
    }, [isopen]);

    const handleCheckboxChange = (categoryId , name) => {


        setCheckedCategories(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
        

        if(type === 'category'){
            setUrlSearchParams(prev => ({
                ...prev,
                category:  prev.category.includes(name) ? prev.category.filter(item => item !== name) : [...prev.category , name]
            }))
        }

        if(type === 'brand'){
            setUrlSearchParams(prev => ({
                ...prev,
                brand:  prev.brand.includes(name) ? prev.brand.filter(item => item !== name) : [...prev.brand , name]
            }))
        }
        
    };
   
    
    return (
        <div>
            {/* Category chooser head */} 
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsopen(!isopen)}>
                <h3 className="font-montserrat font-bold 2xl:text-xl xl:text-base md:text-sm text-xs  capitalize  leading-[30px] text-primary">{type}</h3>
                {isopen ? <ArrowDown style={` duration-400 w-[11px] h-[6px] rotate-[180deg] `}/> :
                    <ArrowDown style={`duration-400 w-[11px] h-[6px] rotate-[0deg]`}/>}
            </div>

            {/* All categories list */}
            {isopen  &&
                <div 
                    ref={catagoryRef} 
                    className=" overflow-y-scroll     flex flex-col gap-y-1 lg:gap-y-3 overflow-hidden transition-all duration-400 2xl:mt-5 xl:mt-4 lg:mt-3 md:mt-2 mt-1   "
                    style={{height: `${catagoryHeight}px`}}
                >
                    {allcatagories.map((item, index) => (
                        <label 
                            key={item._id || index}
                            className="flex items-center gap-x-2 font-montserrat font-normal text-base leading-[24px] text-primary cursor-pointer"
                        >
                            <input 
                                type="checkbox"
                                checked={!!checkedCategories[item._id || index]}
                                onChange={() => handleCheckboxChange(item._id || index , item.name)}
                                className="hidden"
                            />
                            {checkedCategories[item._id || index] ? (
                                <CheckboxChecked className={`lg:w-5 lg:h-5 w-3.5 h-3.5  `} />
                            ) : (
                                <CheckboxOutline className={`lg:w-5 lg:h-5 w-3.5 h-3.5`} />
                            )}
                            <p className="flex justify-between w-full  font-montserrat text-primary text-[12px] md:text-sm lg:text-base   ">
                                <span>{item.name}</span>
                                {item.total && <span>({item.total})</span>}
                            </p>
                        </label>
                    ))}
                </div>
            }
        </div>
    );
}

export default Chooser;