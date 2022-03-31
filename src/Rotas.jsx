import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/adm";

import { Header } from "./components/central/Header";

import { Usuario } from "./pages/adm/usuario";
import { Categoria } from "./pages/adm/categoria";
import { Produto } from "./pages/adm/produto";

import { PostagemUsuario } from "./pages/adm/usuario/PostagemUsuario";
import { PostagemCategoria } from "./pages/adm/categoria/PostagemCategoria";
import { PostagemProduto } from "./pages/adm/produto/PostagemProduto";

import RotaPrivada from "./services/autenticacao";
import RotaPrivadaLogin from "./services/protecao-login";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<RotaPrivadaLogin><Login/></RotaPrivadaLogin>}/>
          <Route path="/" element={<Header/>}>
          <Route path="/home" element={<RotaPrivada><Home/></RotaPrivada>}/>
          <Route path="/usuario" element={<RotaPrivada><Usuario/></RotaPrivada>}/>
          <Route path="/categoria" element={<RotaPrivada><Categoria/></RotaPrivada>}/>
          <Route path="/produto" element={<RotaPrivada><Produto/></RotaPrivada>}/>
          <Route path="/cadastrar-usuario" element={<RotaPrivada><PostagemUsuario/></RotaPrivada>}/>
          <Route path="/cadastrar-categoria" element={<RotaPrivada><PostagemCategoria/></RotaPrivada>}/>
          <Route path="/cadastrar-produto" element={<RotaPrivada><PostagemProduto/></RotaPrivada>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;