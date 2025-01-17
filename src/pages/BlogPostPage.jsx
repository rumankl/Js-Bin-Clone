// import React, { useState } from "react";
// import { Button } from "@material-tailwind/react";
// import { useNavigate, useOutletContext } from "react-router-dom";

// const BlogPostPage = () => {
//   const [blogTitle, setBlogTitle] = useState("");
//   const [blogContent, setBlogContent] = useState("");
//   const navigate = useNavigate();
//   const { addBlogPost } = useOutletContext(); // Access the `addBlogPost` function

//   const handleBlogSubmit = (e) => {
//     e.preventDefault();
//     if (blogTitle && blogContent) {
//       addBlogPost({ title: blogTitle, content: blogContent });
//       setBlogTitle("");
//       setBlogContent("");
//       navigate("/blog-page"); // Navigate back to BlogPage after posting
//     }
//   };

//   return (
//     <div className="p-10">
//       <form
//         onSubmit={handleBlogSubmit}
//         className="blog-form  space-y-3 border-2 border-red-300 p-10 w-[800px]  rounded-lg border-e-deep-orange-400 border-s-deep-orange-400  border-b-green-500 "
//       >
//         <div className="flex items-center space-x-9 ">
//           <label className="font-bold font-serif text-xl text-white  tracking-wider">Title</label>
//           <input
//             type="text"
//             placeholder="Blog Title"
//             value={blogTitle}
//             onChange={(e) => setBlogTitle(e.target.value)}
//             required
//             className="w-full p-4"
//           />
//         </div>
//         <div className="flex items-center space-x-2">
//           <label className="font-bold font-serif text-xl text-white  tracking-wider">Content</label>
//           <textarea
//             placeholder="Write your blog post here..."
//             value={blogContent}
//             onChange={(e) => setBlogContent(e.target.value)}
//             rows="8"

//             required
//             className="w-full p-4 resize-none"
//           ></textarea>
//         </div>
//         <div className="flex justify-end">
//           <Button
//             type="submit"
//             size="sm"
//             className="bg-light-green-800 hover:bg-light-green-900"
//           >
//             Post
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default BlogPostPage;




import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../posts/postSlice";


const BlogPostPage = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); // To dispatch Redux actions
  const { setIsModalOpen } = useOutletContext(); // To close modal

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    if (blogTitle && blogContent) {
      dispatch(addPost({ title: blogTitle, content: blogContent })); // Dispatch the addPost action
      setBlogTitle("");
      setBlogContent("");
      setIsModalOpen(false); // Close modal
      navigate("/blog-page"); // Navigate back to BlogPage after posting
    }
  };

  return (
    <div className="p-10">
      <form
        onSubmit={handleBlogSubmit}
        className="blog-form space-y-3 border-2 border-red-300 p-10 w-[800px] rounded-lg border-e-deep-orange-400 border-s-deep-orange-400 border-b-green-500"
      >
        <div className="flex items-center space-x-9">
          <label className="font-bold font-serif text-xl text-white tracking-wider">Title</label>
          <input
            type="text"
            placeholder="Blog Title"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            required
            className="w-full p-4"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label className="font-bold font-serif text-xl text-white tracking-wider">Content</label>
          <textarea
            placeholder="Write your blog post here..."
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            rows="8"
            required
            className="w-full p-4 resize-none"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            size="sm"
            className="bg-light-green-800 hover:bg-light-green-900"
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostPage;
