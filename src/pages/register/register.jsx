import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";

export function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "https://api.hub256.live/auth/admin/register",
        formData
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="items-center justify-center flex-col gap-6 mx-10"
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Input
            size="lg"
            label="Username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-100"
          />

          <Input
            size="lg"
            label="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-100"
          />

          <Input
            type="password"
            size="lg"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            label="Password"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-100"
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type="submit" className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
