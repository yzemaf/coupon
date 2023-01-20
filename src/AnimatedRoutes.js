import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Page from "./components/Page";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Home from "./components/Home";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="promotions/1" element={<Page />} />
        <Route path="promotions/2" element={<Page2 />} />
        <Route path="promotions/3" element={<Page3 />} />
        <Route path="promotions/4" element={<Page4 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
