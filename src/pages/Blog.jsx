import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router';


// components 
import BlogPostCart from '../components/customeUI/blog/BlogPostCart';
import Pagination from '../components/common/Pagination';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { totalBlogPagination } from '../redux/slices/paginationSlice';
import { currentBlogPagination } from '../redux/slices/paginationSlice';
import BlogViewSkeleton from '../components/customeUI/blog/BlogViewSkeleton';

function Blog() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.pagination.blogPagi.currentPage);
    const totalPage = useSelector(state => state.pagination.blogPagi.totalPage);
    const [data , setData] = useState([]);
    const [blogs , setBlogs] = useState([]);



      useEffect(() => {
        fetch('https://jsonfakery.com/blogs')
       .then(res => res.json())
       .then(data => {
        console.log(data.length );
        dispatch(totalBlogPagination(Math.floor(data.length/10)))
        setData(data)
        
       });
      }, [])

      useEffect(() => {
        
        data.length > 0 && setBlogs(data.slice((currentPage - 1) * 10 , (currentPage - 1) * 10 + 10))
        
      }, [currentPage , data])
      

      const handleViewBlogDetails = (blogItem)=>{ 
        localStorage.setItem('blogView' , JSON.stringify(blogItem))
        navigate(`/blog/details/${blogItem.id}`)
      }
       


    return (
        <div>   
          {/* all posts */}
          <div className=" grid grid-cols-2  ">
            {blogs.length === 0 ? 
              Array(10).fill(0).map((_, index) => ( 
                <BlogViewSkeleton key={index} />
              )) 
            :  
            blogs.map((post) => (
              <BlogPostCart key={post.user_id} onClick={()=>handleViewBlogDetails(post)} tag={post.category} title={post.subtitle} userName={post.user.first_name} postTime={post.created_at} preview={post.featured_image} />
            ))}
           </div>

          {/* pagination */} 
          <Pagination currentPaginationPageDispatch={currentBlogPagination} currentPage={currentPage} totalPage={totalPage} /> 
        </div>
    );
}

export default Blog;