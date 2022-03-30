import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
    { titulo: "Home", href: "/home", icone: "fa fa-home" },
    { titulo: "Categorias", href: "/categoria", icone: "fa fa-list-alt" },
    { titulo: "Produtos", href: "/produto", icone: "fa fa-product-hunt" },
    { titulo: "Usuários", href: "/usuario", icone: "fa fa-user" },
]

export const Sidebar = () => {

    const showMobileMenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };
    let location = useLocation();

    return(
        <div className="bg-dark distanciamento">
            <div className="d-flex">
                {/*<Button color="white" className="ms-auto text-white d-lg-none"
                    onClick={() => showMobileMenu()}>
                        <i className="fa fa-list"></i>
                </Button>*/}
            </div>

            <div className="p-3 mt-2">
                <Nav vertical className="sidebarNav">
                    {navigation.map((navi, index) => (
                        <NavItem key={index} className="sidenav-bg">
                            <Link to={navi.href}
                                className={
                                    location.pathname === navi.href
                                    ? "active nav-link py-3 text-secondary"
                                    : "nav-link py-3 link-sidebar text-light"
                                }
                            >
                                <i className={navi.icone}></i>
                                <span className="ms-3 d-inline-block">{navi.titulo}</span>
                            </Link>
                        </NavItem>
                    ))}
                </Nav>
            </div>
        </div>
    )
}