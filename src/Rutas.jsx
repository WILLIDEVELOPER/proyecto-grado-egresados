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
      <Route path="proyecto-grado-egresados/" element={<Login />} />
      <Route path="proyecto-grado-egresados/register" element={<Registro />} />
      <Route path="proyecto-grado-egresados/personal" element={<Personal />} />
      <Route path="proyecto-grado-egresados/laboral" element={<Laboral />} />
      <Route path="proyecto-grado-egresados/anunciosview" element={<AnunciosView/>}/>
      <Route path="proyecto-grado-egresados/egresados" element={<EgresadosView />} />
      <Route path="proyecto-grado-egresados/crearpost" element={<CreatePost/>}/>
      <Route path="proyecto-grado-egresados/anuncios" element={<GetAnuncios/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Rutas;
