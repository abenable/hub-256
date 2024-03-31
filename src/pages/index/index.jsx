import axios from "axios";
import { useEffect, useState } from "react";
import BrowseCard from "../../components/cards/browseCard";
import { HorizontalCard } from "../../components/cards/horizontalCard";
import PostCard from "../../components/cards/postCard";
import { Spinner } from "@material-tailwind/react";

export default function IndexPage() {
  const [recommendedPost, getRecommendedPost] = useState();
  const [posts, getPosts] = useState([]);

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const response = await axios.get(
          "https://api.hub256.live/blog/recommended"
        );
        getRecommendedPost(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchRecommended();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://api.hub256.live/blog/all");
        getPosts(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {recommendedPost ? (
        <HorizontalCard post={recommendedPost} />
      ) : (
        <div className="justify-center items-center flex">
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      )}
      <BrowseCard />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts && posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <Spinner className="h-12 w-12" />
        )}
      </div>
    </>
  );
}
