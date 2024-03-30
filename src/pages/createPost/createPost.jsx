import { useState } from "react";
import axios from "axios";
import { Card, Input, Typography, Button } from "@material-tailwind/react";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
    urlToImg: "",
    content: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "http://api.hub256.live/blog/post",
        formData
      );
      console.log(response.data);
      // Handle success or show a success message to the user
    } catch (error) {
      console.error(error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <Card
      color="transparent"
      shadow={true}
      className="items-center justify-center flex-col gap-6 mx-10"
    >
      <Typography
        variant="h4"
        color="blue-gray"
        className="mt-8 flex justify-center"
      >
        Create a post
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 max-w-screen-lg sm:w-96 items-center justify-center flex-col gap-6 mx-10"
      >
        <div className="mb-1 flex flex-col gap-6 justify-center mx-10 items-center">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Title
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Description
          </Typography>
          <Input
            size="lg"
            placeholder="Enter description"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Content
          </Typography>
          <Input
            size="lg"
            placeholder="Enter content"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            type="text"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Category
          </Typography>
          <Input
            size="lg"
            placeholder="Enter category"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            URL
          </Typography>
          <Input
            size="lg"
            placeholder="Enter URL"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            type="text"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Image URL
          </Typography>
          <Input
            size="lg"
            placeholder="Enter image URL"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            type="text"
            id="urlToImg"
            name="urlToImg"
            value={formData.urlToImg}
            onChange={handleChange}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Create Post
          </Button>{" "}
        </div>
      </form>
    </Card>
  );
};

export default CreatePost;
