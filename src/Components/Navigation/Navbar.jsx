import React from "react";
import { NavLink, useNavigate} from "react-router-dom";
import logo from "../../Images/LogoTailwind.svg";

function Navbar() {

  const navigate = useNavigate()

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <NavLink to="/egresados"  className="flex items-center">
          <img src={logo} alt="" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Egresados
          </span>
        </NavLink>
        <div className="flex md:order-2">
          <button
          onClick={() => navigate("/anuncios")}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-3  dark:focus:ring-blue-800"
          >
            Anuncios
          </button>

          <button
          onClick={() => navigate("/")}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  dark:focus:ring-blue-800"
          >
            Cerrar Sesion
          </button>
          
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-24 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/personal"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                focus:text-blue-500"
              >
                Informacion Personal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/laboral"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                focus:text-blue-500"
              >
                Informacion Laboral
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
