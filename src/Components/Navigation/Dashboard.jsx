import { React} from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/LogoTailwind.svg";

function Dashboard() {
  return (
        <div className="h-screen fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center">
              <img
                className="w-12 h-12"
                src={logo} alt=""/>

              <span className="mx-2 text-2xl font-semibold text-white">
                Tablero
              </span>
            </div>
          </div>

          <nav className="mt-10">
            <NavLink
              className="flex items-center px-6 py-2 mt-4 text-gray-500  focus:text-green-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
              to="/egresados"
            >
              <span className="mx-3">Egresados</span>
            </NavLink>

            <NavLink
              to="/anunciosview"
              className="flex items-center px-6 py-2 mt-4 text-gray-500 focus:text-green-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            >
              <span className="mx-3">Anuncios</span>
            </NavLink>

            <NavLink
              to="/crearpost"
              className="flex items-center px-6 py-2 mt-4 text-gray-500 focus:text-green-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            >
              <span className="mx-3">Crear Post</span>
            </NavLink>

            <NavLink
              className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
              to="/"
            >
              <span className="mx-3">Cerrar Sesion</span>
            </NavLink>

            {/* <a
              className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
              href="/forms"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>

              <span className="mx-3">Forms</span>
            </a> */}
          </nav>
        </div>
  );
}

export default Dashboard;