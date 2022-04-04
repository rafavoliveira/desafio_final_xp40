import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as C from "reactstrap";
import LogoCategoria from "../../assets/home/categoria.png";
import LogoProduto from "../../assets/home/produto.png";
import LogoUsuario from "../../assets/home/usuario.png";

const CardsHome = [
    { titulo: "Categorias", texto: "Gerenciamente e armazenamento de dados das categorias.", titulo_botao: "Visualizar", link: "/categoria", logo: LogoCategoria },
    { titulo: "Produtos", texto: "Gerenciamente e armazenamento de dados das produtos.", titulo_botao: "Visualizar", link: "/produto", logo: LogoProduto },
    { titulo: "Usuários", texto: "Gerenciamente e armazenamento de dados das usuários.", titulo_botao: "Visualizar", link: "/usuario", logo: LogoUsuario },
]

function Home(){
    return(
        <div>
            <C.Row>
                <h5 className="mb-3 mt-3">Informações gerais</h5>
                {CardsHome.map((card, index) => (
                <C.Col md="6" lg="4" key={index}>
                    <C.Card className="distaciamento-card" body>
                        <img src={card.logo} width="200"/>
                        <C.CardTitle tag="h5">{card.titulo}</C.CardTitle>
                        <C.CardText>{card.texto}</C.CardText>
                        <div>
                            <Link to={card.link}>
                                <C.Button color="primary">{card.titulo_botao}</C.Button>
                            </Link>
                        </div>
                    </C.Card>
                </C.Col>
                ))}
            </C.Row>
        </div>
    )
}

export default Home;