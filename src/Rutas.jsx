import React from "react";
import { Routes, Route } from "react-router-dom";
import Registro from "./Components/ValidacionUsers/Registro";
import Login from "./Components/ValidacionUsers/Login";
import Personal from "./Components/InfoEgresados/Personal";
import Laboral from "./Components/InfoEgresados/Laboral";
import NotFound from "./Components/NotFound";
import CreatePost from "./Components/SetAnuncios/CreatePost";
import GetAnuncios from "./Components/SetAnuncios/GetAnuncios";
import EgresadosView from "./Components/InfoEgresados/EgresadosView";
import AnunciosView from "./Components/SetAnuncios/AnunciosView";

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registro />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/laboral" element={<Laboral />} />
      <Route path="/anunciosview" element={<AnunciosView/>}/>
      <Route path="/egresados" element={<EgresadosView />} />
      <Route path="/crearpost" element={<CreatePost/>}/>
      <Route path="/anuncios" element={<GetAnuncios/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Rutas;
