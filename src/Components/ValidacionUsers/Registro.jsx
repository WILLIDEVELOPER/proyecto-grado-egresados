import { React, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
// import {Button,Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Registro() {
  const navigate = useNavigate();

  const { handleChange, handleSubmit } = useContext(AppContext);

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="h-auto w-4/6 grid grid-cols-2">
        <div className="w-full h-full bg-slate-800">
          <img
            className="w-full h-full"
            src="src\Images\LoginImage.jpeg"
            alt=""
          />
        </div>
        <div className="w-full h-full bg-slate-800 flex items-center">
          <form className="h-5/6 p-10" onSubmit={handleSubmit}>
            <h1 className="capitalize text-white font-bold text-2xl mb-8 text-center">
              Registro de Usuario
            </h1>
            <input
              name="nombre"
              required
              id="nombre"
              placeholder="Nombre"
              className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              autoFocus
              onChange={handleChange}
              
            />
            <input
              type="text"
              required
              name="apellido"
              id="apellido"
              placeholder="Apellido"
              className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              onChange={handleChange}
              
            />

            <input
              type="text"
              required
              id="cedula"
              name="cedula"
              placeholder="Cedula"
              className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              onChange={handleChange}
              
            />

            <input
              type="text"
              required
              id="correo"
              name="correo"
              placeholder="Correo"
              className="bg-slate-300 p-3 w-full mb-7 rounded-md placeholder:font-bold placeholder:text-slate-700"
              onChange={handleChange}
              
            />

            {/* <div className="flex items-baseline ">
              <input
                type="checkbox"
                className="mr-1"
                id="checkbox"
                value="checkbox"
              />{" "}
              <label className="text-slate-400 capitalize">
                Acepto terminos y condiciones
              </label>
            </div> */}

            <button
              onClick={() => {
                navigate("/");
              }}
              className="bg-indigo-500 mt-10 w-full px-4 py-2 text-white rounded-md hover:bg-indigo-400"
              type="submit"
            >
              Registrar
            </button>
            <NavLink
              to="/"
              className="mt-2 flex justify-center hover:underline text-slate-400 hover:text-slate-600"
            >
              {" "}
              Iniciar Sesion
            </NavLink>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Registro;
