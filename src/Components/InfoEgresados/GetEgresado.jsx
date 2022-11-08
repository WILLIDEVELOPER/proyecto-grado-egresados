import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

function GetEgresado({ id = "" }) {
  const { setShowModal, users } = useContext(AppContext);

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-[500px] my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
            <img
              className="w-8 h-8 rounded-full mr-1"
              src="https://cdn-icons-png.flaticon.com/512/17/17004.png"
              alt=""
            />
            <h3 className="text-3xl font-semibold">Egresado</h3>
          </div>
          <div className="relative p-6 flex-auto">
            <div className="p-4 w-full max-w-xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-start space-x-8">
                      {users.map((user) => {
                        if (user.id === id) {
                          return (
                            <div key={user.id} className="grid grid-cols-6 gap-6 gap-x-0">
                              <div className="col-span-6 sm:col-span-4">
                                <label className="block text-sm font-medium text-gray-300 uppercase">
                                  {user.nombre}
                                </label>
                              </div>

                              <div className="col-span-6 sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-300 uppercase">
                                  {user.apellido}
                                </label>
                              </div>

                              <div className="col-span-6 sm:col-span-4">
                                <label className="block text-sm font-medium text-gray-300 uppercase">
                                  {user.cedula}
                                </label>
                              </div>

                              <div className="col-span-6 sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-300 uppercase">
                                  {user.genero}
                                </label>
                              </div>

                              <div className="col-span-6 sm:col-span-4">
                                <label className="block text-sm font-medium text-gray-300 uppercase">
                                  {user.celular}
                                </label>
                              </div>

                              <div className="col-span-6 sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-300 uppercase">
                                   {user.correo}
                                </label>
                              </div>

                              <div className="col-span-6 sm:col-span-4">
                                <label className="block text-sm font-medium text-gray-300 uppercase">
                                  {user.situacion}
                                </label>
                              </div>

                              <div className="col-span-6 sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-300 uppercase">
                                    {user.nombre_empresa}
                                </label>
                              </div>

                              <div className="col-span-6 sm:col-span-4">
                                <label className="block text-sm font-medium text-gray-300 uppercase">
                                  {user.sector}
                                </label>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetEgresado;
