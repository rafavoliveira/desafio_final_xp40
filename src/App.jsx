import Rotas from "./Rotas";
import { useState, useEffect } from "react";
import { UsuarioLogado } from "./services/api-rotas/api-rotas-usuario";
import { GlobalStyle } from "./styles/GlobalStyle";

function App(){

    const [usuarioLogado, setUsuarioLogado] = useState([]);

    const getUsuarioLogado = async () => {
        const response = await UsuarioLogado();

        setUsuarioLogado(response);
    }

    useEffect(() =>{
        getUsuarioLogado();
    },[]);

    return(
        <>
          <GlobalStyle/>
          <Rotas/>
        </>
    )
}

export default App;
