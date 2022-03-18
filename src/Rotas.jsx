import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/adm/Index";

import RotaPrivada from "./services/autenticacao";
import RotaPrivadaLogin from "./services/protecao-login";

function Rotas() {
  return (
    <>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;
