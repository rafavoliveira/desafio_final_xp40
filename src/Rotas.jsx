import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/adm";

import { Header } from "./components/central/Header";

import { Usuario } from "./pages/adm/usuario";
import { Categoria } from "./pages/adm/categoria";
import { Produto } from "./pages/adm/produto";

import RotaPrivada from "./services/autenticacao";
import RotaPrivadaLogin from "./services/protecao-login";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route 
              path="/login" 
              element={
                <RotaPrivadaLogin>
                    <Login/>
                </RotaPrivadaLogin>
              } 
          />
          <Route 
              path="/home" 
              element={
                <RotaPrivada>
                    <Home/>
                </RotaPrivada>
              }
          />
          <Route
              path="/usuario"
              element={
                <RotaPrivada>
                    <Usuario/>
                </RotaPrivada>
              }
          />
          <Route
              path="/categoria"
              element={
                <RotaPrivada>
                    <Categoria/>
                </RotaPrivada>
              }
          />
          <Route
              path="/produto"
              element={
                <RotaPrivada>
                    <Produto/>
                </RotaPrivada>
              }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;
