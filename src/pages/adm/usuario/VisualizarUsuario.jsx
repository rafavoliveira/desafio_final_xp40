import * as C from "reactstrap";
import { UsuarioSelecionado } from "../../../services/api-rotas/api-rotas-usuario";
import { useState, useEffect } from "react";

export function VisualizarUsuario(){

    const [usuario, setUsuario] = useState([]);

    const getUsuarioSelecionado = async () => {
        const response = await UsuarioSelecionado();

        setUsuario(response);
    }

    useEffect(() => {
        getUsuarioSelecionado()
    },[])

    console.log(usuario);

    return(
        <C.Row>
            {usuario.map((dados, index) => (
            <C.Card key={index}>
                <C.CardTitle tag="h6" className="border-bottom p-3 mb-0">
                    Usuário - {dados.nomeUsuario}
                </C.CardTitle>

                <C.CardBody className="p-4">
                    <C.Row>
                        <h2 className="text-center afastar">{dados.nomeUsuario}</h2>
                        <C.Col lg="6">
                            <img src={dados.fotoUsuario} className="afastar" width="80%"/>
                        </C.Col>
                        <C.Col lg="6">
                            <C.Alert color="dark">
                                Nome do usuário: {dados.nomeUsuario}
                            </C.Alert>
                            <C.Alert color="warning">
                                Email do usuário: {dados.emailUsuario}
                            </C.Alert>
                        </C.Col>
                    </C.Row>
                </C.CardBody>
            </C.Card>
            ))}
        </C.Row>
    )
}