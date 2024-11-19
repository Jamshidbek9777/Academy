import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { Footer, NavbarComponent } from "@/components";
import { AboutUs } from "@/pages";
import { Students } from "./pages/Students/students.jsx";
import { Family } from "./pages/Family/family.jsx";
import { Teachers } from "./pages/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <NextUIProvider>
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/students" exact element={<Students />} />
        <Route path="/family" exact element={<Family />} />
        <Route path="/teachers" exact element={<Teachers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </NextUIProvider>
);
