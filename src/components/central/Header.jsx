import { useState, useEffect } from "react";
import { UsuarioLogado } from "../../services/api-rotas/api-rotas-usuario";

export function Header(){

    const [usuarioLogado, setUsuarioLogado] = useState([]);

    const getUsuarioLogado = async () => {
        const response = await UsuarioLogado();

        setUsuarioLogado(response);   
    }

    useEffect(() =>{
        getUsuarioLogado()
    },[]);

    if(usuarioLogado == 401){
        return(
            <></>
        );
    }else{
        return(
            <>Header - Logado</>
        )
    }
}