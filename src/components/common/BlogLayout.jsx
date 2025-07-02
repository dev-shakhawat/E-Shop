import React from 'react'
import BlogSearch from '../customeUI/blog/BlogSearch'
import BlogCategories from '../customeUI/blog/BlogCategories'
import BlogTags from '../customeUI/blog/BlogTags'
import { Outlet, useLocation } from 'react-router'
import Header from "../common/header/Index.jsx"
import Footer from './footer/Footer'
import Container from './Container'
import Beadcrumb from '../common/Breadcrumb.jsx'

export default function BlogLayout() {

    const location = useLocation();

  return (
    <div>
        <Header/>
        
        {/* blog banner */}
         <Container>
        {location.pathname === "/blog" ?
            <div className="mt-8 bg-[#F8F8F8] py-[242px] pl-[110px] rounded-[15px]  mb-20  ">
            
            {/* title */}
            <h2 className=" font-poppins font-bold text-[56px] text-[#303030] leading-[68px]   ">Tech Talk Blog</h2>

            <div className="flex items-center gap-4 mt-6  ">
                    <p className="font-normal font-montserrat text-base leading-[24px] text-[#303030] ">Home</p>
                <span className="w-[2px] h-6 bg-[#303030]    "></span>
                <p className=" font-bold font-montserrat text-base leading-[24px] text-[#303030]    ">Blog</p>
            </div>
            </div>
         :
         <Beadcrumb/>
        }
         </Container>


        <Container>
            <div className="flex gap-x-14 ">

                {/* blog filters */}
                <div className="w-[440px]   ">

                    {/* blog search */}
                    <BlogSearch/>

                    {/* blog categories */}
                    <BlogCategories/>

                    {/* blog tags */}
                    <BlogTags title={"Tags"} allTags ={["Technology" , "Trending" , "Innovation" , "Tips" , "Gadget" , "Guide" , "Gadget Review" ]}    />

                </div>

                <div className="flex-1">
                    <Outlet/>
                </div>

            </div>
        </Container>

        <Footer/>
    </div>
  )
}
