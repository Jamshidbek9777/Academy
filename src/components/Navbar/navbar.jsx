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
} from "@nextui-org/react";

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About us", "Students", "Family", "Teachers"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      isBordered={"true"}
      shouldHideOnScroll={"true"}
      className="bg-gradient-to-r  from-gradientStart via-[#D4F7F3] to-gradientEnd"
      height="5rem"
      style={{ boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.08)" }}
    >
      <NavbarContent className="flex justify-between w-full">
        <NavbarBrand>
          <p className="font-bold text-inherit">Academy</p>
        </NavbarBrand>

        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            For students
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            For family
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            For teacher
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
