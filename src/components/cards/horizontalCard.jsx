import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function HorizontalCard() {
  return (
    <Card className="`bg-white shadow-md rounded-md p-4 flex flex-col md:flex-row items-start md:items-center justify-between mx-12 my-4 md:flex">
      <CardHeader
        shadow={true}
        floated={true}
        className="h-full w-full m-0 shrink-0 rounded-md md:w-2/5 rounded-t-md md:rounded-t-none md:rounded-l-md"
      >
        <img
          className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h6"
          color="purple"
          className="mb-4 inline-flex text-purple-700 bg-purple-50 bg-opacity-50 font-medium text-base py-1 px-3 rounded-full capitalize"
        >
          lifestyle
        </Typography>
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-2 sm:text-medium "
        >
          Lyft launching cross-platform service this week
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <a href="#" className="inline-block">
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
        </a>
      </CardBody>
    </Card>
  );
}
