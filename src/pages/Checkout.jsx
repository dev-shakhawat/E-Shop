import React, { useEffect, useRef, useState } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Container from '../components/common/Container'; 
import Information from '../components/checkout/information/Information';

function Checkout() {
    
    const [activetab , setActiveTab] = useState(1)
    const initialActiveTabRef = useRef(null);
    const [activetabPosition , setActiveTabPosition] = useState({width : 0 , left : 0})


    useEffect(() => { 
        if (initialActiveTabRef.current) {
            const width = initialActiveTabRef.current.getBoundingClientRect().width; 
            setActiveTabPosition({width: Math.floor(width) , left : Math.floor(initialActiveTabRef.current.offsetLeft)})
        }
    }, []);
    

    const handleTab = (e ,tab) => {
        setActiveTab(tab)
        setActiveTabPosition({width : Math.floor(e.target.getBoundingClientRect().width) , left : Math.floor(e.target.offsetLeft)});  
    }
    

    return (
        <div>
            <Container>
               <Breadcrumb/>

               {/* header */}
               <h2 className=" font-poppins font-bold text-[56px] leading-[68px] text-primary text-center    ">Checkout</h2>

               {/* navs and tabs */}
               <div className="">

                  
                  <div className="flex items-center justify-center mt-9 mb-20">
                     {/* current step */}
                     <p className="font-montserrat font-bold text-base leading-[24px] text-white bg-brand w-12 h-12 grid place-items-center mr-4 rounded-full ">0{activetab}</p> 

                    {/* buttons */}
                    <div className="flex items-center   w-fit gap-20   relative pb-2  ">
                        <button ref={initialActiveTabRef} type="button" onClick={(e) => handleTab(e ,1)} className={`checkoutButtons ${activetab == 1 ? " text-primary   " : "text-tertary   "} `}>Information</button>
                        <button type="button" onClick={(e) => handleTab(e ,2)} className={`checkoutButtons ${activetab == 2 ?  " text-primary    " : " text-tertary  "} `}>Shipping</button>
                        <button type="button" onClick={(e) => handleTab(e ,3)} className={`checkoutButtons ${activetab == 3 ?  " text-primary    " : " text-tertary   "} `}>Payment</button>
                        
                        {/* underline */}
                        <span style={ {width : `${activetabPosition.width}px` , left : `${activetabPosition.left}px`}} className='py-0.5 bg-brand absolute bottom-0 left-0 duration-300  '></span>
                    </div>

                  </div>


                  {/* tabs */}
                  {activetab == 1 && <Information/>}
                  {activetab == 2 && <div>Shipping</div>}
                  {activetab == 3 && <div>Payment</div>}
               </div>


            </Container>
        </div>
    );
}

export default Checkout;