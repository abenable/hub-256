import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function LatestPostsCard({ post }) {
  return (
    <Card className="bg-white w-full sm:w-1/2 shadow-md rounded-md px-3 flex flex-col sm:flex-row items-start md:items-center justify-between mx-2 sm:mx-1 my-2">
      <CardHeader className="w-full m-0 shrink-0 rounded-md md:w-2/5 rounded-t-md md:rounded-t-none md:rounded-l-md">
        <img
          className="sm:h-32 w-full rounded-lg object-cover object-center shadow-xl"
          src={post.urlToImg}
          alt="nature image"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h6"
          color="purple"
          className="mb-4 inline-flex text-purple-700  bg-deep-purple-100 bg-opacity-50 font-medium text-base px-3 rounded-full capitalize"
        >
          {post.category}
        </Typography>
        <Typography color="blue-gray" className="mb-1 sm:text-base font-bold">
          {post.title}
        </Typography>
        <a href={post.learnMoreUrl} className="inline-block"></a>
      </CardBody>
    </Card>
  );
}
