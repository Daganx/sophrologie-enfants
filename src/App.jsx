// React Router
import { Route, Routes } from "react-router-dom";
// Pages
import HomePage from "./pages/home/homepage";
import AboutPage from "./pages/about/aboutpage";
import BookingPage from "./pages/booking/booking";
import ContactPage from "./pages/contact/contactpage";
// Components
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
