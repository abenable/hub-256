import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function LatestPostsCard({ post }) {
  return (
    <Card className="mt-10 mx-6 sm:w-1/2 md:w-1/2 lg:w-1/2">
      <CardHeader color="blue-gray" className="relative h-30">
        <img src={post.urlToImg} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {post.title}
        </Typography>
        <Typography>{post.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href={post.learnMoreUrl} className="inline-block">
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
        </a>
      </CardFooter>
    </Card>
  );
}