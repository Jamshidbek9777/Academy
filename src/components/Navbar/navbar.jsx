import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { LANGUAGE } from "../../tools/contants";
import { getText } from "../../locales";
export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();
  const languageOptions = [
    { code: "uz", label: "Uzbek" },
    { code: "en", label: "English" },
    { code: "tr", label: "Turkish" },
  ];

  useEffect(() => {
    const storedLanguage = localStorage.getItem(LANGUAGE) || "en";
    setLanguage(storedLanguage);
    document.documentElement.lang = storedLanguage;
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem(LANGUAGE, selectedLanguage);
    document.documentElement.lang = selectedLanguage;
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      shouldHideOnScroll={true}
      className="bg-gradient-to-r from-gradientStart via-[#D4F7F3] to-gradientEnd"
      height="5rem"
      style={{ boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.08)" }}
    >
      <NavbarContent className="flex justify-between w-full">
        <NavbarBrand onClick={() => navigate("/")}>
          <p className="font-bold text-inherit cursor-pointer">AcademyX</p>
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
          {getText("navItem1")}
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer"
          onClick={() => navigate("/students")}
        >
          {getText("navItem2")}
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer"
          onClick={() => navigate("/family")}
        >
          {getText("navItem3")}
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer"
          onClick={() => navigate("/teachers")}
        >
          {getText("navItem4")}
        </NavbarItem>

        <NavbarItem>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="p-2 border rounded bg-white"
          >
            {languageOptions.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="text-center flex flex-col p-6">
        <NavbarItem
          className="cursor-pointer pb-3 text-xl"
          onClick={() => navigate("/about")}
        >
          {getText("navItem1")}
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer pb-3 text-xl"
          onClick={() => navigate("/students")}
        >
          {getText("navItem2")}
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer pb-3 text-xl"
          onClick={() => navigate("/family")}
        >
          {getText("navItem3")}
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer pb-3 text-xl"
          onClick={() => navigate("/teachers")}
        >
          {getText("navItem4")}
        </NavbarItem>
        <NavbarItem>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="p-2 border rounded bg-white outline-none"
          >
            {languageOptions.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
