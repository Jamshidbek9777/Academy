import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { LANGUAGE } from "../../tools/contants";
import { useNavigate } from "react-router-dom";

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();
  const menuItems = ["About us", "Students", "Family", "Teachers"];
  const languageOptions = [
    { code: "uz", label: "Uzbek" },
    { code: "en", label: "English" },
    { code: "ru", label: "Russian" },
    { code: "tr", label: "Turkish" },
  ];

  // Fetch the language from localStorage when the component mounts
  useEffect(() => {
    const storedLanguage = localStorage.getItem(LANGUAGE) || "en"; // Default to "en" if not found
    setLanguage(storedLanguage); // Set the language from localStorage
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem(LANGUAGE, selectedLanguage);
    document.location.reload(true); // Optional: Reload to apply language change
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      isBordered={true}
      shouldHideOnScroll={true}
      className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd"
      height="5rem"
      style={{ boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.08)" }}
    >
      <NavbarContent className="flex justify-between w-full">
        <NavbarBrand onClick={() => navigate("/")}>
          <p className="font-bold text-inherit">Academy</p>
        </NavbarBrand>

        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem
          className="cursor-pointer"
          onClick={() => navigate("/about")}
        >
          About us
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer"
          onClick={() => navigate("/students")}
        >
          For students
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer"
          onClick={() => navigate("/family")}
        >
          For family
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer"
          onClick={() => navigate("/teachers")}
        >
          For teacher
        </NavbarItem>
        <NavbarItem className="cursor-pointer">
          <Select
            // value={language}
            // aria-label="Language Selection"
            // onChange={(e) => handleLanguageChange(e.target.value)}
            style={{ width: "100px" }}
            defaultSelectedKeys={["uz"]}
          >
            {languageOptions.map((lang) => (
              <SelectItem key={lang.code}>{lang.label}</SelectItem>
            ))}
          </Select>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem
          className="cursor-pointer"
          onClick={() => navigate("/about")}
        >
          About us
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer"
          onClick={() => navigate("/students")}
        >
          For students
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer"
          onClick={() => navigate("/family")}
        >
          For family
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer"
          onClick={() => navigate("/teachers")}
        >
          For teacher
        </NavbarItem>
        <NavbarItem className="cursor-pointer">
          <Select
            // value={language}
            // aria-label="Language Selection"
            // onChange={(e) => handleLanguageChange(e.target.value)}
            style={{ width: "100px" }}
            defaultSelectedKeys={["uz"]}
          >
            {languageOptions.map((lang) => (
              <SelectItem key={lang.code}>{lang.label}</SelectItem>
            ))}
          </Select>
        </NavbarItem>
        {/* {menuItems.map((item, index) => (
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
        ))} */}
      </NavbarMenu>
    </Navbar>
  );
}
