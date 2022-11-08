import { React, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

function Login() {
  const { log, handleChangeLog, validar } = useContext(AppContext);

  const { username, password } = log;
  const navigate = useNavigate();

  const handleSubmitLog = (e) => {
    e.preventDefault();
    if (validar != null) {
      alert("Bienvenido Egresado")
      navigate("proyecto-grado-egresados/anuncios");
    }
    if (validar == null) {
      if (username === "admin" && password === "admin") {
        alert("Bienvenido ADMIN")
        navigate("proyecto-grado-egresados/egresados");
      }else{
        alert("Digite bien sus credenciales, Puede crearse una cuenta si no la tiene");
        navigate("proyecto-grado-egresados/");
      }
    }
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="h-2/4 w-2/4 grid grid-cols-2">
        <div className="w-full bg-slate-50 h-full">
          <img src="src\Images\LoginImage.jpeg" alt="" />
        </div>
        <div className="w-full h-full bg-slate-800 flex justify-center items-center">
          <form className="h-5/6 p-10" onSubmit={handleSubmitLog}>
            <h1 className="capitalize text-white font-bold text-2xl mb-8 text-center">
              Inicia Sesión
            </h1>
            <input
              name="username"
              value={username}
              placeholder="Usuario"
              className="bg-slate-300 p-3 w-full mb-7 rounded-md"
              autoFocus
              required
              onChange={handleChangeLog}
            />
            <input
              name="password"
              type="password"
              value={password}
              required
              placeholder="Contraseña"
              className="bg-slate-300 p-3 w-full mb-7 rounded-md"
              onChange={handleChangeLog}
            ></input>
            {/* <div className="flex items-baseline ">
                <input
                  type="checkbox"
                  className="mr-1"
                  id="checkbox"
                  value="checkbox"
                />{" "}
                <label className="text-slate-400 capitalize">recuerdame</label>
              </div> */}
            <button
              onClick={() => navigate()}
              type="submit"
              className="bg-indigo-500 mt-10 w-full px-4 py-2 text-white rounded-md hover:bg-indigo-400"
            >
              Entrar
            </button>
            <NavLink
              to="/register"
              className="mt-2 flex justify-center hover:underline text-slate-400 hover:text-slate-600"
            >
              {" "}
              Crear Una Cuenta
            </NavLink>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
