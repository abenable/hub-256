import { Typography, Button } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./postCard";
import { Spinner } from "@material-tailwind/react";

const BrowseCard = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const API_URL =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_LOCAL_URL
      : import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url =
          selectedCategory === "All"
            ? `${API_URL}/blog/all`
            : `${API_URL}/blog/category/${selectedCategory}`;
        const response = await axios.get(url);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchPosts();
  }, [selectedCategory]);

  const categories = [
    "All",
    "Technology",
    "Lifestyle",
    "Sports",
    "Health",
    "Business",
    "Politics",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto flex !w-full max-w-6xl flex-col !items-center justify-center rounded-2xl px-6 py-4">
      <Typography
        variant="h2"
        className="text-dark mb-3.5 text-2xl font-bold sm:text-4xl xl:text-heading-3"
      >
        Browse by Category
      </Typography>
      <Typography className="font-medium text-base text-gray-600 ">
        Select a category to see more related content
      </Typography>
      <div className="container mx-auto flex !w-full max-w-6xl !items-center justify-center rounded-2xl px-6 py-3 gap-4 flex-wrap mb-5 my-2">
        {categories.map((category) => (
          <Button
            key={category}
            size="md"
            className={`rounded-full border font-medium capitalize text-base sm:text-xs md:text-base focus:bg-black focus:border-dark focus:text-white hover:bg-gray-900 hover:border-dark hover:text-white ease-in duration-200 bg-gray-100 border-gray-3 text-dark ${
              selectedCategory === category ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-20">
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

export default BrowseCard;
