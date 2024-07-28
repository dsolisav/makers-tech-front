"use client";
import React from "react";
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
  Image,
} from "@nextui-org/react";
// import {makersLogo} from "@/images/makers_tech_logo.png"
const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Home", "Shop", "About Us", "Our Networks"];
  return (
    <div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        position="sticky"
        isBordered
        className="p-2 "
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image href="#" src="/images/makers_tech_logo.png" width={150} />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="#">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground">
              Shop
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              About Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="gap-5">
          <NavbarItem>
            <Link href="#">
              <Image
                src="/images/facebookImage.png"
                width={25}
                className="rounded-sm"
              />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">
              <Image
                src="/images/linkedinImage.png"
                width={25}
                className="rounded-sm"
              />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">
              <Image
                src="/images/twitterImage.png"
                width={25}
                className="rounded-sm"
              />
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" className="w-full" href="#" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
