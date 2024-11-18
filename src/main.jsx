import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { NavbarComponent } from "./components/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <NextUIProvider>
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" exact element={<App />} />
      </Routes>
    </BrowserRouter>
  </NextUIProvider>
);
