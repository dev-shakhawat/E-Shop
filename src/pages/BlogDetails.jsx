import React from 'react'; 
import { Link, useLocation } from 'react-router';


// icons
import { BiSolidUser } from "react-icons/bi";
import { IoTime } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";



// components
import DetailsTopic from '../components/customeUI/blog/DetailsTopic';
import BlogTags from '../components/customeUI/blog/BlogTags';
import ArrowLong from '../assets/icons/ArrowLong';
import BlogComment from '../components/customeUI/blog/BlogComment';
import LeaveComment from "../components/customeUI/blog/LeaveComment"

function BlogDetails() {

   const location = useLocation();
   console.log(location);
   
 

    const blog = JSON.parse(localStorage.getItem('blogView'))
       

    const blogTopics = [
        {id: '01' , title: "5G Connectivity" , text: "5G connectivity is the latest generation of mobile network technology, and it promises to revolutionize the way we use our devices. With faster speeds and lower latency, 5G connectivity will enable new applications such as remote surgery, augmented reality, and autonomous vehicles."},
        {id: '02' , title: "Artificial Intelligence (AI)" , text: "AI is transforming the way we interact with our devices and the world around us. From virtual assistants like Siri and Alexa to self-driving cars and smart homes, AI is changing the way we live and work."},
        {id: '03' , title: "Virtual Reality (VR) and Augmented Reality (AR)" , text: "VR and AR are technologies that enable us to experience digital content in a more immersive way. From gaming and entertainment to education and training, these technologies have the potential to transform the way we learn and experience the world."},
        {id: '04' , title: "Internet of Things (IoT)" , text: "The IoT is a network of devices that are connected to the internet, allowing them to communicate and exchange data. This technology has the potential to transform many industries, from healthcare and agriculture to transportation and manufacturing."},
        {id: '05' , title: "Edge Computing" , text: "Edge computing is a new computing paradigm that brings computing power closer to the devices that generate and consume data. By processing data at the edge of the network, edge computing can reduce latency, improve security, and enhance privacy."},
        {id: '06' , title: "Blockchain" , text: "Blockchain is a technology that enables secure, decentralized transactions without the need for a central authority. From cryptocurrency to supply chain management, blockchain has the potential to transform many industries."},
        {id: '07' , title: "Quantum Computing" , text: "Quantum computing is a new type of computing that uses the principles of quantum mechanics to perform calculations. With the potential to solve complex problems that are beyond the capabilities of classical computers, quantum computing has the potential to revolutionize many industries, from finance and healthcare to energy and transportation."},
    ]
    

    
    return (
        <div>

            {/* title */}
            <h2 className=" font-poppins font-bold text-[56px] leading-14 text-[#303030]    ">{blog.title}</h2>
             
             {/* about more post */}
             <div className="flex mt-6 items-center gap-12 "> 

                {/* name */}
                <div className="flex items-center font-montserrat font-normal text-base leading-6 gap-3 text-[#646464]  ">
                   <BiSolidUser />
                   <span className="">{blog.user.first_name}</span>
                </div>

                {/* post time */}
                <div className="flex items-center font-montserrat font-normal text-base leading-6 gap-3 text-[#646464]  ">
                   <IoTime />
                   <span className="">{blog.created_at}</span>
                </div>

                {/* post comment */}
                {blog.comment && 
                <div className="flex items-center font-montserrat font-normal text-base leading-6 gap-3 text-[#646464]  ">
                   <FaComment />
                   <span className="">{blog.created_at}</span>
                </div>}
             </div>

             {/* blog image */}
             <img src={blog.featured_image} alt={blog.featured_image} className="mt-12 rounded-[25px] h-[645px]      " />

             {/* summary */}
             <p className="mt-12 font-montserrat font-normal text-xl leading-7.5 text-[#303030]     ">{blog.summary}</p>

             {/* all points */}
             <div className="mt-8">
                {blogTopics.map((topic) => (
                    <DetailsTopic key={topic.id} topicNumber={topic.id} title={topic.title} text={topic.text} />
                ))}
             </div>

             {/* summary two */}
             <p className="mt-12 font-montserrat font-normal text-xl leading-7.5 text-[#303030]     ">In conclusion, staying up to date with the latest tech trends is essential for anyone who wants to stay ahead of the curve. From 5G connectivity and AI to VR and AR, these technologies have the potential to transform the way we live and work. By keeping up with the latest trends and innovations, you can prepare yourself for the future and stay ahead of the competition.</p>


             {/* blog tags */}
             <BlogTags title={null} allTags ={["Technology" , "Trending" , "Innovation" , "Tips" , "Artificial Intelligence" , "Virtual Reality" , "Augmented Reality","Internet of Things","Internet of Things","Blockchain","Quantum Computing","Emerging Technologies" ]}/>


             {/* blog next-prev button and social */}
             <div className="flex items-center justify-between mt-20   ">
                
                {/* prev button */}
                <button type='button' className="flex items-center gap-4 cursor-pointer font-poppins font-semibold text-xl leading-7.5 text-[#303030]  ">
                  <ArrowLong/>
                  <span>Prev Post</span>
                </button>

                {/* socials */}
                <ul className="flex items-center gap-8   ">
                  <li><Link to={`#`}><FaFacebookF /></Link></li>
                  <li><Link to={`#`}><FaTwitter /></Link></li>
                  <li><Link to={`#`}><IoLogoInstagram /></Link></li>
                </ul>
                
                {/* next button */}
                <button type='button' className="flex items-center gap-4 cursor-pointer font-poppins font-semibold text-xl leading-7.5 text-[#303030]  ">
                  <span>Next Post</span>
                  <ArrowLong className="rotate-180"/>
                </button>
             </div>


             {/* divider */}
             <hr  className='text-[#cbcbcb] my-20 '/>

             {/* comments */}
             <div className="">
               <h2 className=" font-poppins font-semibold text-[36px] leading-[46px] text-[#303030]    ">Comments</h2>

               <div className="mt-10 flex flex-col gap-12   ">
                  <BlogComment profileImage={null} name={'Angelo Powers'} stars={5} date={'2 month ago'} comment={`“Thanks for this informative article! I'm particularly excited about the potential of 5G connectivity to enable new applications and transform industries. It's amazing to think about the possibilities that this technology could unlock."`}    />
                  <BlogComment profileImage={null} name={'Angelo Powers'} stars={5} date={'2 month ago'} comment={`“Thanks for this informative article! I'm particularly excited about the potential of 5G connectivity to enable new applications and transform industries. It's amazing to think about the possibilities that this technology could unlock."`}    />
                  <BlogComment profileImage={null} name={'Angelo Powers'} stars={5} date={'2 month ago'} comment={`“Thanks for this informative article! I'm particularly excited about the potential of 5G connectivity to enable new applications and transform industries. It's amazing to think about the possibilities that this technology could unlock."`}    />
                  <BlogComment profileImage={null} name={'Angelo Powers'} stars={5} date={'2 month ago'} comment={`“Thanks for this informative article! I'm particularly excited about the potential of 5G connectivity to enable new applications and transform industries. It's amazing to think about the possibilities that this technology could unlock."`}    />
               </div>
               
               {/* load more comment */}
               <div className="flex mt-12 justify-center ">
                  <button type="button" className='py-4 px-10 rounded-[10px] border border-[#FF624C] text-[#FF624C] font-montserrat font-bold text-xl leadibg-7.5 cursor-pointer   '   >Load More Comments</button>
               </div>


               {/* leave a comment */}
               <LeaveComment/>
             </div>
 
  
        </div>
    );
}

export default BlogDetails;