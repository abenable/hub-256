import { useEffect, useState } from "react";
import { HorizontalCard } from "../../components/cards/horizontalCard";
import { Typography, Button } from "@material-tailwind/react";

function Index() {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch("https://api.hub256.live/blog/latest");
        const data = await response.json();
        setLatestPosts(data);
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <>
      <HorizontalCard />
      <div className="container mx-auto flex !w-full max-w-6xl flex-col !items-center justify-center rounded-2xl px-6 py-16">
        <Typography
          variant="h2"
          className="text-dark mb-3.5 text-2xl font-bold sm:text-4xl xl:text-heading-3"
        >
          Browse by Category
        </Typography>
        <Typography className="font-medium text-base text-gray-600 ">
          Select a category to see more related content
        </Typography>
        <div className="container mx-auto flex !w-full max-w-6xl !items-center justify-center rounded-2xl px-6 py-5 gap-4 flex-wrap mb-5 my-3">
          <Button
            size="md"
            className="rounded-full border font-medium capitalize text-base sm:text-sm md:text-base focus:bg-black focus:border-dark focus:text-white hover:bg-gray-900 hover:border-dark hover:text-white ease-in duration-200 bg-gray-100 border-gray-3 text-dark"
          >
            All
          </Button>
          <Button
            size="md"
            className="rounded-full border font-medium capitalize text-base sm:text-sm md:text-base focus:bg-black focus:border-dark focus:text-white hover:bg-gray-900 hover:border-dark hover:text-white ease-in duration-200 bg-gray-100 border-gray-3 text-dark"
          >
            Technology
          </Button>
          <Button
            size="md"
            className="rounded-full border font-medium capitalize text-base sm:text-sm md:text-base focus:bg-black focus:border-dark focus:text-white hover:bg-gray-900 hover:border-dark hover:text-white ease-in duration-200 bg-gray-100 border-gray-3 text-dark"
          >
            Lifestyle
          </Button>
          <Button
            size="md"
            className="rounded-full border font-medium capitalize text-base sm:text-sm md:text-base focus:bg-black focus:border-dark focus:text-white hover:bg-gray-900 hover:border-dark hover:text-white ease-in duration-200 bg-gray-100 border-gray-3 text-dark"
          >
            Travel
          </Button>
          <Button
            size="md"
            className="rounded-full border font-medium capitalize text-base sm:text-sm md:text-base focus:bg-black focus:border-dark focus:text-white hover:bg-gray-900 hover:border-dark hover:text-white ease-in duration-200 bg-gray-100 border-gray-3 text-dark"
          >
            Health
          </Button>
          <Button
            size="md"
            className="rounded-full border font-medium capitalize text-base sm:text-sm md:text-base focus:bg-black focus:border-dark focus:text-white hover:bg-gray-900 hover:border-dark hover:text-white ease-in duration-200 bg-gray-100 border-gray-3 text-dark"
          >
            Culture
          </Button>
        </div>
      </div>
    </>
  );
}

export default Index;
