import React from "react";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import Dashboard from "../Navigation/Dashboard";

function CreatePost() {

  const { post, handlePostChange, handlePostSubmit, inputFileRef, setFile } = useContext(AppContext);

  return (
    <div className="h-screen ">
      <div className="grid grid-cols-[22%_73%] gap-2">
        <Dashboard />
        <div className="mt-3 flex flex-col items-center justify-center">
          <div className="h-auto w-4/6">
            <form onSubmit={handlePostSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="titulo"
                  className="block mb-2 text-sm font-bold"
                >
                  Titulo
                </label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Estudia Ingenieria de Sistemas"
                  onChange={handlePostChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="descripcion"
                  className="block mb-2 text-sm font-bold"
                >
                  Descripcion
                </label>
                <textarea
                  type="text"
                  id="descripcion"
                  name="descripcion"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Descripcion breve del anuncio"
                  onChange={handlePostChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="carrera_vinculada"
                  className="block mb-2 text-sm font-bold"
                >
                  Carrera Vinculada
                </label>
                <input
                  type="text"
                  id="carrera_vinculada"
                  name="carrera_vinculada"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Ingenieria sistemas, Psicologia, etc"
                  onChange={handlePostChange}
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold"
                    htmlFor="referencia"
                  >
                    Referencia
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="referencia"
                    name="referencia"
                    type="text"
                    placeholder="https://...."
                    onChange={handlePostChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block mb-2 text-sm font-bold"
                    htmlFor="tipo_anuncio"
                  >
                    Tipo anuncio
                  </label>
                  {/* <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-gender"
                    type="text"
                    placeholder="evento/noticia/curso/oferta empleo"
                  /> */}
                  <select name="tipo_anuncio"
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="tipo_anuncio" onChange={handlePostChange}
                  >
                    <option value="evento">evento</option>
                    <option value="noticia">noticia</option>
                    <option value="curso">curso</option>
                    <option value="oferta"> Oferta</option>
                  </select>
                </div>
              </div>
              <div className="mb-5 flex justify-center items-center w-full">
                <label
                  htmlFor="imagen"
                  className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:text-slate-50"
                >
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="imagen"
                    name="imagen"
                    type="file"
                    className="hidden"
                    ref={inputFileRef}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Crear
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
