import { Typography, Button } from "@material-tailwind/react";

const BrowseCard = () => {
  const categories = [
    "All",
    "Technology",
    "Lifestyle",
    "Sports",
    "Health",
    "Business",
    "Politics",
  ];

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
            className="rounded-full border font-medium capitalize text-base sm:text-sm md:text-base focus:bg-black focus:border-dark focus:text-white hover:bg-gray-900 hover:border-dark hover:text-white ease-in duration-200 bg-gray-100 border-gray-3 text-dark"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BrowseCard;
