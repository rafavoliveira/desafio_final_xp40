import { useState, useEffect } from "react";
import { UsuarioLogado } from "../../services/api-rotas/api-rotas-usuario";
import * as C from "./style";
import * as Componente from "../Navbar/Navbar";
import * as Side from "../Navbar/Sidebar";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";

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
            <C.HeaderCliente>
                ...
            </C.HeaderCliente>
        );
    }else{
        return(
            <main>
                <Componente.Navbar/>
                <div className="pageWrapper d-lg-flex">
                    <aside className="sidebarArea shadow" id="sidebarArea">
                        <Side.Sidebar/>
                    </aside>

                    <div className="contentArea">
                        <Container className="p-4" fluid>
                            <Outlet/>
                        </Container>
                    </div>
                </div>
            </main>
        )
    }
}