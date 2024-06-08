import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function HorizontalCard({ post }) {
  return (
    <Card className="`bg-white shadow-md rounded-md p-2 flex flex-col md:flex-row sm:flex-col items-start md:items-center justify-between mx-4 mt-24 mb-16 md:flex">
      <CardHeader
        shadow={true}
        floated={true}
        className="h-full w-full m-0 shrink-0 rounded-md md:w-2/5 rounded-t-md md:rounded-t-none md:rounded-l-md"
      >
        <img
          className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          src={post.image}
          alt="nature image"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h6"
          color="purple"
          className="mb-4 inline-flex text-purple-700 bg-deep-purple-100 bg-opacity-50 font-medium text-base py-1 px-3 rounded-full capitalize"
        >
          {post.category}
        </Typography>
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-2 sm:text-medium "
        >
          {post.title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {post.description}
        </Typography>
        <Link to={`/blog/id/${post._id}`} className="inline-block">
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
        </Link>
      </CardBody>
    </Card>
  );
}
