import React, {useContext} from "react";
import Navbar from "../Navigation/Navbar";
import { AppContext } from "../../Context/AppContext";

function Laboral() {

  const {handleSubmitUpdate, handleUpdateUserChange} = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <div className="mt-10">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Informacion Laboral
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Digite aqui su Informacion laboral correspondiente
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form onSubmit={handleSubmitUpdate}>
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Situacion
                        </label>
                        <select
                          onChange={handleUpdateUserChange}
                          id="situacion"
                          name="situacion"
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        >
                          <option value="trabaja">Trabaja</option>
                          <option value="no trabaja">No trabaja</option>
                          <option value="otra">Otra</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Nombre Empresa
                        </label>
                        <input
                          type="text"
                          name="nombre_empresa"
                          onChange={handleUpdateUserChange}
                          id="nombre_empresa"
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Sector
                        </label>
                        <input
                          type="text"
                          name="sector"
                          onChange={handleUpdateUserChange}
                          id="sector"
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0  dark:focus:ring-blue-800"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Laboral;
