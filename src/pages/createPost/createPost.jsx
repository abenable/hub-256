import React, { useState } from "react";
import axios from "axios";
import { Card, Input, Typography, Button } from "@material-tailwind/react";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    urlToImg: "",
    content: "",
    category: "",
  });

  const API_URL =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_LOCAL_URL
      : import.meta.env.VITE_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(`${API_URL}/blog/post`, formData);
      console.log(response.data);
      // Handle success or show a success message to the user
    } catch (error) {
      console.error(error);
      // Handle error or show an error message to the user
    }
  };

  const inputFields = [
    { label: "Title", id: "title", name: "title", value: formData.title },
    {
      label: "Category",
      id: "category",
      name: "category",
      value: formData.category,
    },
    {
      label: "Description",
      id: "description",
      name: "description",
      value: formData.description,
    },
    {
      label: "Content",
      id: "content",
      name: "content",
      value: formData.content,
    },
    {
      label: "Image URL",
      id: "urlToImg",
      name: "urlToImg",
      value: formData.urlToImg,
    },
  ];

  return (
    <Card
      color="transparent"
      shadow={true}
      className="items-center justify-center flex-col gap-6 mx-10 mt-20"
    >
      <Typography
        variant="h4"
        color="blue-gray"
        className="mt-2 flex justify-center"
      >
        Create a post
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 max-w-screen-lg sm:w-96 items-center justify-center flex-col gap-6 mx-10"
      >
        <div className="mb-1 flex flex-col gap-6 justify-center mx-10 items-center">
          {inputFields.map((field) => (
            <React.Fragment key={field.id}>
              <Typography variant="h6" color="blue-gray" className="-mb-4">
                {field.label}
              </Typography>
              <Input
                size="lg"
                placeholder={`Enter ${field.label}`}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                type="text"
                id={field.id}
                name={field.name}
                value={field.value}
                onChange={handleChange}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </React.Fragment>
          ))}
          <Button type="submit" className="mt-6" fullWidth>
            Create Post
          </Button>{" "}
        </div>
      </form>
    </Card>
  );
};

export default CreatePost;
