import React from 'react';


// components
import Container from '../components/common/Container';
import BlogSearch from '../components/customeUI/blog/BlogSearch';
import BlogCategories from '../components/customeUI/blog/BlogCategories';
import BlogTags from '../components/customeUI/blog/BlogTags';

function Blog() {
    return (
        <Container>
            
            {/* blog banner */}
            <div className="mt-8 bg-[#F8F8F8] py-[242px] pl-[110px] rounded-[15px]  ">
              
              {/* title */}
              <h2 className=" font-poppins font-bold text-[56px] text-[#303030] leading-[68px]   ">Tech Talk Blog</h2>

              <div className="flex items-center gap-4 mt-6  ">
                <p className="font-normal font-montserrat text-base leading-[24px] text-[#303030] ">Home</p>
                <span className="w-[2px] h-6 bg-[#303030]    "></span>
                <p className=" font-bold font-montserrat text-base leading-[24px] text-[#303030]    ">Blog</p>
              </div>
            </div>


            {/* all blogs */}
            <div className="flex mt-20 ">

                {/* blog filters */}
                <div className="w-[440px]   ">

                    {/* blog search */}
                    <BlogSearch/>

                    {/* blog categories */}
                    <BlogCategories/>

                    {/* blog tags */}
                    <BlogTags/>

                </div>

                {/* blog posts */}
                <div className="flex-1">

                </div>
            </div>


        </Container>
    );
}

export default Blog;