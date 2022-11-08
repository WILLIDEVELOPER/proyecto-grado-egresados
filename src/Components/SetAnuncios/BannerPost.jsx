import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import Modal from "./Modal";

function BannerPost() {
  const { posts, setShowModal, showModal } = useContext(AppContext);

  const [getId, setGetId] = useState(0);

  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <div className="grid grid-cols-4 gap-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className=" w-[425px] h-[710px] flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="mb-3 w-full h-[426px] shadow-lg"
                src={post.imagen}
                alt="Bonnie image"
              />
              <h5 className=" capitalize mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {post.tipo_anuncio} : {post.titulo}
              </h5>
              <span className=" first-letter:uppercase text-sm text-gray-500 mb-3 dark:text-gray-400">
                {post.descripcion}
              </span>
              <span className="text-md text-gray-300 dark:text-gray-200">
                {post.carrera_vinculada}
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href={post.referencia}
                  className="flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Mas Informacion
                </a>
                {/* <Button
                  onClick={handleState}
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Comentar
                </Button> */}
                <button
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={() => {
                    setShowModal(true);
                    setGetId(post.id);
                  }}
                >
                  Comentar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showModal ? <Modal id={getId} /> : null}
    </>
  );
}

export default BannerPost;
