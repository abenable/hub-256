import axios from "axios";
import { useEffect, useState } from "react";
import BrowseCard from "../../components/cards/browseCard";
import { HorizontalCard } from "../../components/cards/horizontalCard";
import { Spinner } from "@material-tailwind/react";

export default function IndexPage() {
  const [recommendedPost, getRecommendedPost] = useState();

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
    </>
  );
}
