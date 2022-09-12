import React from 'react'
import { Route, Routes } from "react-router-dom";

import Event from "../pages/Event";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import OutputSheet from "../pages/OutputSheet";
import Profil from "../pages/Profil";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/sheet" element={<OutputSheet />} />
      <Route path="/event/:id" element={<Event />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;