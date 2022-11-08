import { React, createContext, useState, useEffect, useRef } from "react";

export const AppContext = createContext();

export function AppContextProvider(props) {
  //VARIABLES
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    nombre: null,
    apellido: null,
    cedula: null,
    genero: null,
    celular: null,
    correo: null,
    situacion: null,
    nombre_empresa: null,
    sector: null,
  });
  const [listUpdated, setListUpdated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    titulo: null,
    descripcion: null,
    carrera_vinculada: null,
    tipo_anuncio: null,
    comentario: null,
    referencia: null,
  });
  const inputFileRef = useRef()
  const [file, setFile] = useState(null)
  let data = {};
  let formData = new FormData();
  const [postUpdate, setPostUpdate] = useState(false);
  const [log, setLog] = useState({
    username: "",
    password: "",
  })
  const [validate, setValidate] = useState({
    validar: [],
  });

  const {validar} = validate;

  const [showModal, setShowModal] = useState(false);


//METHODOS

  //GET USER
  useEffect(() => {
    const getUsers = () => {
      fetch(
        "https://rest-api-proyecto-grado-production.up.railway.app/api/usuarios"
      )
        .then((res) => res.json())
        .then((res) => setUsers(res));
    };
    // const getValidate = () => {
    //   setValidate(users.filter(user => user.cedula === username && user.cedula === password));
    // }
    getUsers();
    // getValidate();
    setListUpdated(false);
  }, [listUpdated]);

  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch(
      "https://rest-api-proyecto-grado-production.up.railway.app/api/eliminarUsuario/" +
        id,
      requestInit
    )
      .then((res) => res.text())
      .then((res) => console.log(res));

    setListUpdated(true);
  };

  const handleDeletePost = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch(
      "https://rest-api-proyecto-grado-production.up.railway.app/api/eliminarPost/" +
        id,
      requestInit
    )
      .then((res) => res.text())
      .then((res) => console.log(res));

    setPostUpdate(true);
  };

  //CREATE USER
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    //consulta
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch(
      "https://rest-api-proyecto-grado-production.up.railway.app/api/crearUsuario",
      requestInit
    )
      .then((res) => res.text())
      .then((res) => setUser(res));

    //reiniciando state de libro
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("cedula").value = "";
    document.getElementById("correo").value = "";
  };

  const handleUpdateUser = () => {
    console.log(validar.id)
    const requestInit = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch(
      "https://rest-api-proyecto-grado-production.up.railway.app/api/actualizarUsuario/" +
        validar.id,
      requestInit
    )
      .then((res) => res.text())
      .then((res) => console.log(res));

    setListUpdated(true);
  }

  const handleSubmitUpdate = (e) =>{
      e.preventDefault()
      handleUpdateUser();
  }

  //GET POST
  useEffect(() => {
    const getPosts = () => {
      fetch(
        "https://rest-api-proyecto-grado-production.up.railway.app/api/posts"
      )
        .then((res) => res.json())
        .then((res) => setPosts(res));
    };
    getPosts();
    setPostUpdate(false);
  }, [postUpdate]);

  //CREATE POST

  const handlePostChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    console.log(post);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault()
    data = {...post, imagen : file};


    formData.append("titulo", data.titulo)
    formData.append("descripcion", data.descripcion)
    formData.append("carrera_vinculada", data.carrera_vinculada)
    formData.append("tipo_anuncio", data.tipo_anuncio)
    formData.append("referencia", data.referencia)
    formData.append("imagen", data.imagen)


    //consulta
    const requestInit = {
      method: "POST",
      body: formData,
    };
    fetch(
      "https://rest-api-proyecto-grado-production.up.railway.app/api/crearPost",
      requestInit
    )
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch(err => {
        console.err(err);
      })

    //reiniciando state de libro
  };

  
  const handleChangeLog = (e) =>{
    const { name, value} = e.target;
    setLog({
      ...log,
      [name]: value,
    })
    setValidate({
      ...validate,
      validar: users.find(user => user.cedula === value && user.cedula === value),
    })
  }

  const handleUpdatePost = (id) =>{
    const requestInit = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    };
    fetch(
      "https://rest-api-proyecto-grado-production.up.railway.app/api/actualizarPost/" +
        id,
      requestInit
    )
      .then((res) => res.text())
      .then((res) => console.log(res));

    setPostUpdate(true);
  }

  // const result = validar.find(res => res.cedula === username && res.cedula === password);

  return (
    <AppContext.Provider
      value={{
        users,
        user,
        handleDelete,
        handleChange,
        handleSubmit,
        posts,
        post,
        handlePostChange,
        handlePostSubmit,
        inputFileRef,
        setFile,
        log,
        handleChangeLog,
        validar,
        handleSubmitUpdate,
        handleDeletePost,
        setShowModal,
        showModal,
        handleUpdatePost,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
