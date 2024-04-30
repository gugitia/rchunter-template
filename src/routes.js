import React from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./pages/menu/app";
import Aboutus from "./pages/about-us/app";
import Services from "./pages/servicos/app";
import Contact from "./pages/contact/app";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/quem-somos" element={<Aboutus />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
};

export default Rotas;
