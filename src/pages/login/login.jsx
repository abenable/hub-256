import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const API_URL =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_LOCAL_URL
      : import.meta.env.VITE_URL;

  const [formData, setFormData] = useState({
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
      await axios.post(`${API_URL}/auth/login`, formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="items-center justify-center flex-col gap-6 mt-24 mx-10"
    >
      <Typography variant="h3" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-0 font-normal">
        Enter your details to login.
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
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
              Remember me
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type="submit" className="mt-6" fullWidth>
          Sign In
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Dont have an account?{" "}
          <Link to="register" className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
