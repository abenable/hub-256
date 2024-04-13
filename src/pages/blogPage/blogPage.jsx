import { Spinner, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  let { postId } = useParams();
  const [post, getpost] = useState();

  const BASE_URL =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_LOCAL_URL
      : import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blog/id/${postId}`);
        console.log(response.data);
        getpost(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="container mt-20 mx-auto flex flex-col items-center justify-center w-2/3">
      {post ? (
        <div className="container items-center justify-center">
          <Typography variant="h2">{post.title}</Typography>{" "}
          <img
            className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50 my-10"
            src={post.urlToImg}
            alt="nature image"
          />
          <Typography variant="h4" className="pb-6">
            {post.description}
          </Typography>
          <Typography>{post.content}</Typography>
        </div>
      ) : (
        <div className="justify-center items-center flex">
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      )}
      <div className="pt-5 flex flex-row gap-5 text-3xl">
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-twitter"></a>
        <a href="#" className="fa fa-instagram"></a>
        <a href="#" className="fa fa-reddit"></a>
      </div>{" "}
    </div>
  );
};

export default BlogPage;
