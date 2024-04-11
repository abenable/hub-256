import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import axios from "axios";

const navListMenuItems = [
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="h5" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="h5"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to={""}>Home</Link>
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography variant="h5" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to={"support"}>Support</Link>
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [email, setEmail] = useState(""); // Initialize email state

  const API_URL =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_LOCAL_URL
      : import.meta.env.VITE_URL;

  const subscribe = async () => {
    try {
      await axios.post(`${API_URL}/users/subscribe`, {
        email: email, // Use the email state value
      });
      handleOpen();
    } catch (error) {
      console.error(error); // Handle the error as needed
    }
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky top-0 z-10 h-max py-2 mx-auto mt-4 w-full items-center">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          variant="h1"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Hub256
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button size="md" variant="gradient" onClick={handleOpen}>
            Subscribe{" "}
          </Button>
          <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none"
            responsive
          >
            <Card className="mx-auto w-full max-w-[24rem]">
              <CardBody className="flex flex-col gap-4">
                <Typography variant="h4" color="blue-gray">
                  Be the first who see the news
                </Typography>
                <Typography
                  className="mb-3 font-normal"
                  variant="paragraph"
                  color="gray"
                >
                  Your company may not be in the software business, but
                  eventually, a software company will be in your business.{" "}
                </Typography>

                <Input
                  label="Email"
                  value={email} // Set the value of the input field to the email state
                  onChange={(e) => setEmail(e.target.value)} // Update the email state on input change
                  size="lg"
                />
              </CardBody>
              <CardFooter className="pt-0">
                <Button variant="gradient" onClick={subscribe} fullWidth>
                  Subscribe
                </Button>
              </CardFooter>
            </Card>
          </Dialog>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="gradient" size="sm" fullWidth>
            Subscribe
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
