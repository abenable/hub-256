import { Typography } from "@material-tailwind/react";

const BlogDetails = ({ post }) => {
  return (
    <div>
      <div>
        <Typography>{post.title}</Typography>{" "}
        <img
          className="h-96 w-full object-cover object-center"
          src={post.urlToImg}
          alt="nature image"
        />
        <div></div>
        <Typography>{post.content}</Typography>
        <div></div>
      </div>
      <span className="flex items-center justify-end gap-4 group-hover:text-primary">
        NEXT POST
        <svg
          className="fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6 11.4L13.8375 3.52498C13.5 3.18748 12.975 3.18748 12.6375 3.52498C12.3 3.86248 12.3 4.38748 12.6375 4.72498L18.9375 11.1375H3.00005C2.55005 11.1375 2.17505 11.5125 2.17505 11.9625C2.17505 12.4125 2.55005 12.825 3.00005 12.825H19.0125L12.6375 19.3125C12.3 19.65 12.3 20.175 12.6375 20.5125C12.7875 20.6625 13.0125 20.7375 13.2375 20.7375C13.4625 20.7375 13.6875 20.6625 13.8375 20.475L21.6 12.6C21.9375 12.2625 21.9375 11.7375 21.6 11.4Z"
            fill=""
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default BlogDetails;
