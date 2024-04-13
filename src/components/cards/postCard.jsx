import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Card className="my-8 mx-1 sm:w-68 md:w-72 lg:w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        {" "}
        <Link to={`/blog/id/${post._id}`}>
          <img src={post.urlToImg} alt="card-image" />
        </Link>
      </CardHeader>{" "}
      <Link to={`/blog/id/${post._id}`}>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {post.title}
          </Typography>
          <Typography>{post.description}</Typography>
        </CardBody>
      </Link>
      <CardFooter className="pt-0">
        <Link to={`/blog/id/${post._id}`} className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
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
      </CardFooter>
    </Card>
  );
}
