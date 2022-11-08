import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import logo from "../../Images/LogoTailwind.svg";

function PostNavbar() {

  const navigate = useNavigate();

  useContext(AppContext)

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="" className="flex items-center">
          <img src={logo} className="mr 3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Anuncios
          </span>
        </a>
        <div className="flex md:order-2">
        <button
            onClick={() => navigate("proyecto-grado-egresados/")}
            type="button"
            className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-3  dark:focus:ring-blue-800"
          >
            Cerrar Sesion
          </button>
          <button
            onClick={() => navigate("proyecto-grado-egresados/personal")}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  dark:focus:ring-blue-800"
          >
            Mi Perfil
          </button>
        </div>
      </div>
    </nav>
  );
}

export default PostNavbar;
