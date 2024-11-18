import { uz } from "./UZ";
import { en } from "./EN";
import { tr } from "./TR";

// export const flagImages = {
//   uz: "/img/uzb.png",
//   en: "/img/usa.png",
//   tr: "/img/tr.png",
//   ru: "/img/tr.png",
// };

export const getLanguage = () => {
  return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
  return getLanguage() === "en"
    ? en[word]
    : getLanguage() === "tr"
    ? tr[word]
    : uz[word];
};
