import { React, useContext, useState } from "react";
import Dashboard from "../Navigation/Dashboard";
import { AppContext } from "../../Context/AppContext";
import GetEgresado from "./GetEgresado";

function EgresadosView() {
  const { handleDelete, users, setShowModal, showModal } =
    useContext(AppContext);
  const [getId, setGetId] = useState(0);

  return (
    <div className="h-screen ">
      <div className="grid grid-cols-[22%_73%] gap-2">
        <Dashboard />
        <div className="mt-8">
          <h4 className="text-gray-600">Egresados</h4>

          <div className="flex flex-col mt-6">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-100">
                        Nombre
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-100">
                        Apellido
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-100">
                        Cedula
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-100">
                        Correo
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-100">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://cdn-icons-png.flaticon.com/512/17/17004.png"
                                alt=""
                              />
                            </div>

                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900">
                                {user.nombre}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">
                            {user.apellido}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">
                            {user.cedula}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          {user.correo}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="mb-3">
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700"
                            >
                              DELETE
                            </button>
                          </div>
                          <div className="mb-3">
                            <button
                              onClick={() => {
                                setShowModal(true);
                                setGetId(user.id);
                              }}
                              className="inline-block w-[75px] align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-700 text-white hover:bg-blue-600"
                            >
                              MORE
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? <GetEgresado id={getId} /> : null}
    </div>
  );
}

export default EgresadosView;
