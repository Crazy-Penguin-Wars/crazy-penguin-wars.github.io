import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about/about.jsx";
import MeetTheTeam from "./pages/about/mtt.jsx";
import Faq from "./pages/about/faq.jsx";
import Gallery from "./pages/gallery.jsx";
import News from "./pages/news.jsx";
import Play from "./pages/play.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<Play />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />

            <Route path="/about" element={<About />} />
            <Route path="/about/team" element={<MeetTheTeam/>} />
            <Route path="/about/faq" element={<Faq />} />
        </Routes>

        <Footer />
    </BrowserRouter>
);