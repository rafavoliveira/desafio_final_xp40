import React from "react";
import { Navigate } from "react-router-dom";

const IniciarAutenticacao = () =>{
    if(localStorage.getItem("token") !== null){
        return true;
    }
    return false;
}

function RotaPrivada({ children }){
    const autenticacao = IniciarAutenticacao();
    return autenticacao ? children: <Navigate to="/login"/>
}

export default RotaPrivada;