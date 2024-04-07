import axios from "axios";
import { useEffect, useState } from "react";
import BrowseCard from "../../components/cards/browseCard";
import { HorizontalCard } from "../../components/cards/horizontalCard";
import { Spinner, Typography } from "@material-tailwind/react";

import LatestPostsCard from "../../components/cards/latest";

export default function IndexPage() {
  const [latestPosts, getLatestPosts] = useState();
  const [recommendedPost, getRecommendedPost] = useState();

  const BASE_URL =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_LOCAL_URL
      : import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blog/recommended`);
        getRecommendedPost(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchRecommended();
  }, []);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blog/latest`);
        getLatestPosts(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchLatestPosts();
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
      <Typography variant="h3" className="items-center justify-center flex">
        Latest blogs
      </Typography>
      <div className="flex flex-row gap-3">
        {latestPosts ? (
          latestPosts.map((post) => (
            <LatestPostsCard key={post._id} post={post} />
          ))
        ) : (
          <div className="justify-center items-center flex">
            <Spinner className="h-16 w-16 text-gray-900/50" />
          </div>
        )}
      </div>
      <BrowseCard />
    </>
  );
}
