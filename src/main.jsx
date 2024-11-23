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
import TeacherDetail from "./pages/teacherDetail/tDetail.jsx";
import ServiceDetail from "./pages/servicesDetail/sDetail.jsx";
import { Services } from "./pages/Services/index.jsx";
import ScrollToTop from "./components/scroll.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <NextUIProvider>
    <BrowserRouter>
      <ScrollToTop />
      <NavbarComponent />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/students" exact element={<Students />} />
        <Route path="/family" exact element={<Family />} />
        <Route path="/teachers" exact element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </NextUIProvider>
);
