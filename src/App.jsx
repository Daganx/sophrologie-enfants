// React Router
import { Route, Routes } from "react-router-dom";
// Pages
import HomePage from "./pages/home/homepage";
import AboutPage from "./pages/about/aboutpage";
import BookingPage from "./pages/booking/booking";
// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}
