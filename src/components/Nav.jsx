import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Dark from "./Dark";

const Nav = () => {
  return (
    <>
      <Navbar className="flex justify-between">
        <img className="h-10 w-10 inline" src="tailwind-logo.png" alt="logo" />

        <NavbarContent className="hidden sm:flex gap-4 space-x-14  ">
          <NavbarItem>
            <Link className="font-semibold text-xl" color="foreground" href="#">
              Product
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              className="font-semibold text-xl"
              color="foreground"
              href="#"
              aria-current="page"
            >
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="font-semibold text-xl" color="foreground" href="#">
              Marketplace
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="font-semibold text-xl"
              color="foreground"
              href="#"
              aria-current="page"
            >
              Company
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="ms-96">
          <NavbarItem className="   lg:flex">
            <Dark />
          </NavbarItem>
          <NavbarItem>
            <Button
              className="w-24 h-10 text-white  bg-blue-400 text-lg "
              href="#"
            >
              Sign in
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Nav;
