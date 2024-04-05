import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function LatestPostsCard({ post }) {
  return (
    <Card className="`bg-white w-1/2 shadow-md rounded-md p-2 flex flex-row md:flex-row sm:flex-row items-start md:items-center justify-between mx-2 my-6 md:flex">
      <CardHeader className="h-full w-full m-0 shrink-0 rounded-md md:w-2/5 rounded-t-md md:rounded-t-none md:rounded-l-md">
        <img
          className="h-full sm:h-32 w-full rounded-lg object-cover object-center shadow-xl"
          src={post.urlToImg}
          alt="nature image"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h6"
          color="purple"
          className="mb-4 inline-flex text-purple-700 bg-purple-50 bg-opacity-50 font-medium text-base px-3 rounded-full capitalize"
        >
          {post.category}
        </Typography>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 sm:text-medium "
        >
          {post.title}
        </Typography>
        <a href={post.learnMoreUrl} className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
