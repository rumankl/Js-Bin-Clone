import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";


const BlogPage = () => {
  const posts = useSelector((state) => state.posts.posts); // Access posts from Redux state
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const nav = useNavigate()
  // const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="relative">
      <h2 className="text-center text-2xl bg-green-400 text-white p-2">Blog</h2>
      <div className="m-4">
        <Button onClick={() => nav('/')}> - Go to Back</Button>
      </div>

      <div className="flex justify-center my-4">
        <NavLink
          to="create-post"
          onClick={() => setIsModalOpen(true)} // Open modal
          className="text-green-500 hover:underline font-semibold"
        >
          Create New Post
        </NavLink>
      </div>

      <div className="blog-posts space-y-4 mt-6 m-10">
        {/* {Posts.length > 0 ? (
          Posts.map((post, index) => ( */}
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <p className="text-gray-500">{`${new Date().toLocaleDateString()}`}</p>
              <h3 className="font-bold text-xl">
                {post.title.slice(0, 1).toUpperCase() + post.title.slice(1)}
              </h3>
              <p className="text-gray-700">
                {post.content.slice(0, 1).toUpperCase() + post.content.slice(1).trim()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No blog posts yet!</p>
        )}
      </div>

      {/* Modal for nested routes */}
      {isModalOpen && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 z-10 h-screen w-screen">
          <Outlet context={{ setIsModalOpen }} />
        </div>
      )}
    </div>
  );
};

export default BlogPage;






// import React, { useState } from "react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const BlogPage = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility


//   const addBlogPost = (post) => {
//     setBlogPosts([post, ...blogPosts]);
//     setIsModalOpen(false); // Close modal after posting

//   };

//   return (
//     <div className="relative">
//       <h2 className="text-center text-2xl bg-green-400 text-white p-2">Blog</h2>

//       <div className="flex justify-center my-4">
//         <NavLink
//           to="create-post"
//           onClick={() => setIsModalOpen(true)} // Open modal
//           className="text-green-500 hover:underline font-semibold"
//         >
//           Create New Post
//         </NavLink>
//       </div>

//       <div className="blog-posts space-y-4 mt-6 m-10 ">
//         {blogPosts.length > 0 ? (
//           blogPosts.map((post, index) => (
//             <div key={index} className="border p-4 rounded-lg">

//               <p className="text-gray-500">{`${new Date().toLocaleDateString()}`}</p>

//               <h3 className="font-bold text-xl">{post.title.slice(0, 1).toUpperCase() + post.title.slice(1)} </h3>

//               <p className="text-gray-700">{post.content.slice(0, 1).toUpperCase() + post.content.slice(1).trim()}</p>

//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No blog posts yet!</p>
//         )}
//       </div>

//       {/* Modal for nested routes */}
//       {isModalOpen && (
//         <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 z-10 h-screen w-screen">
//           <Outlet context={{ addBlogPost }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogPage;





// import { Button } from '@material-tailwind/react'
// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// const BlogPage = () => {
//   const nav = useNavigate()
//   return (

//     <div>
//       <h1 className='text-center bg-green-400 text-white p-2'>BlogPage</h1>
//       {/* <Button onClick={() => window.history.back()}>Back</Button > */}
//       <Button onClick={() => nav(-1)} className='bg-gray-500 m-3 flex flex-cols items-center'>
//         <span className='text-green-400  font-bold text-4xl  bg-white rounded-bl-[40px] rounded-tl-[40px] h-5 w-3  ' >

//         </span>
//         <span className='bg-white p-1 w-5 h-2.5 rounded-e-sm'> </span>
//       </Button>

//     </div >

//   )
// }

// export default BlogPage



// import React, { useState } from "react";
// import { Button } from "@material-tailwind/react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";

// const BlogPage = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const nav = useNavigate();

//   const addBlogPost = (post) => {
//     setBlogPosts([post, ...blogPosts]);
//   };

//   return (
//     <div className="blog">
//       <div className="blog-container">
//         <h2 className="text-center text-2xl bg-green-400 text-white p-2">Blog</h2>

//         <div className=" flex justify-center my-4">
//           {/* Navigate to the create post page */}
//           <NavLink
//             to="create-post"
//             className="text-green-500 hover:underline font-semibold"
//           >
//             Create New Post
//           </NavLink>
//         </div>

//         <Button
//           onClick={() => nav(-1)}
//           className="bg-gray-500 m-3 flex items-center"
//         >
//           <span className="text-green-400 font-bold text-4xl bg-white rounded-bl-[40px] rounded-tl-[40px] h-5 w-3"></span>
//           <span className="bg-white p-1 w-5 h-2.5 rounded-e-sm"></span>
//         </Button>

//         <div className="blog-posts space-y-4 mt-6">
//           {blogPosts.length > 0 ? (
//             blogPosts.map((post, index) => (
//               <div key={index} className="blog-post border p-4 rounded-lg">
//                 <p className="text-gray-500">{`${new Date().toLocaleDateString()}`}</p>
//                 <h3 className="font-bold text-xl">{post.title}</h3>
//                 <p className="text-gray-700">{post.content}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No blog posts yet!</p>
//           )}
//         </div>

//         {/* Renders the nested routes */}
//         <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10" >

//           <Outlet context={{ addBlogPost }} />
//         </div>

//       </div>
//     </div >
//   );
// };

// export default BlogPage;




