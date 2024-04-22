import { useState } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import axios from "axios";

export function NewsLetter() {
  const [email, setEmail] = useState("");

  const API_URL =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_LOCAL_URL
      : import.meta.env.VITE_URL;

  const subscribe = async () => {
    try {
      const response = await axios.post(`${API_URL}/users/subscribe`, {
        email: email,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="mt-8 p-6">
      <div className="container mx-auto flex !w-full max-w-6xl flex-col !items-center justify-center rounded-2xl bg-gray-800 px-6 py-6 mb-1">
        <Typography
          className="text-center text-2xl font-bold md:text-3xl"
          color="white"
        >
          Be the first who see the news
        </Typography>
        <Typography
          color="white"
          className="my-3 text-center !text-base md:w-7/12"
        >
          Your company may not be in the software business, but eventually, a
          software company will be in your business.
        </Typography>
        <div className="mt-2 flex w-full flex-col gap-3 md:w-fit md:flex-row">
          <Input
            label="Email"
            color="white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            color="white"
            size="md"
            className="flex-shrink-0"
            onClick={subscribe}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
export default NewsLetter;
