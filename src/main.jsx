import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
    </BrowserRouter>
);