import React, { useState, useEffect } from "react";
import * as C from "reactstrap";
import { UsuarioLogado } from "../../services/api-rotas/api-rotas-usuario";

export const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const Handletoggle = () => {
        setIsOpen(!isOpen);
    }
    const showMobileMenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    }

    // Usuário Logado
    const [usuarioLogado, setUsuarioLogado] = useState([]);

    const getUsuarioLogado = async () => {
        const response = await UsuarioLogado();

        setUsuarioLogado(response.nomeUsuario);
    }

    useEffect(() =>{
        getUsuarioLogado();
    },[]);

    return(
        <C.Navbar color="white" light expand="md" className="fix-header">
            <div className="d-flex align-items-center">
                <div className="d-lg-block d-none me-5 pe-3">
                    <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" width="130"/>
                </div>

                {/*<C.Button color="primary" className=" d-lg-none" 
                    onClick={() => showMobileMenu()}>
                        <i className="fa fa-list"></i>
                    </C.Button>*/}
            </div>

            <div className="hstack gap-2">
                <C.Button color="primary" size="sm" className="d-sm-block d-md-none">
                    {isOpen ? (
                        <i className="fa fa-list"></i>
                    ): (
                        <i className="fa fa-list"></i>
                    )}
                    </C.Button>
            </div>

            <C.Collapse navbar isOpen={isOpen}>
                <C.Nav className="me-auto" navbar>
                </C.Nav>

                <C.Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <C.DropdownToggle color="transparent">
                        <img 
                            src="https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/04-1.jpg"
                            alt="profile"
                            className="rounded-circle"
                            width="30"
                        />
                    </C.DropdownToggle>

                    <C.DropdownMenu>
                        <C.DropdownItem header>Informações</C.DropdownItem>
                        <C.DropdownItem header>@{usuarioLogado}</C.DropdownItem>
                        <C.DropdownItem divider />
                        <C.DropdownItem
                            onClick={() => window.location.reload(localStorage.clear())}>
                                Sair
                        </C.DropdownItem>
                    </C.DropdownMenu>
                </C.Dropdown>
            </C.Collapse>
        </C.Navbar>
    );
}