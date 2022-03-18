import React from "react";
import { Navigate } from "react-router-dom";

const AutenticacaoLogin = () =>{
    if(localStorage.getItem("token") !== null){
        return false;
    }
    return true;
}

function RotaPrivadaLogin({ children }){
    const autenticacao = AutenticacaoLogin();
    return autenticacao ? children: <Navigate to="/home"/>
}

export default RotaPrivadaLogin;