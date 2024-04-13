import { Spinner, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../../components/cards/postCard";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const API_URL =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_LOCAL_URL
      : import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/blog/all`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mt-24 container flex !w-full max-w-6xl flex-col !items-center justify-center rounded-2xl px-2 py-4">
      <Typography
        variant="h2"
        className="text-dark mb-3.5 text-2xl font-bold sm:text-4xl xl:text-heading-3"
      >
        All Blogs
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-16 p-4">
        {posts && posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div className="justify-center items-center flex">
            <Spinner className="h-12 w-12" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
