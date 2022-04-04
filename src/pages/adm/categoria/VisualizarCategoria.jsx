import { useState, useEffect } from "react";
import * as C from "reactstrap";
import { CategoriaSelecionada } from "../../../services/api-rotas/api-rotas-categoria";

export function VisualizarCategoria(){

    const [categoria, setCategoria] = useState([]);

    const getCategoriaSelecionada = async () => {
        const response = await CategoriaSelecionada();

        setCategoria(response);
    }

    useEffect(() => {
        getCategoriaSelecionada()
    },[]);

    return(
        <C.Row>
            {categoria.map((dados, index) => (
            <C.Card key={index}>
                <C.CardTitle tag="h6" className="border-bottom p-3 mb-0">
                    Categoria - {dados.nomeCategoria}
                </C.CardTitle>
                <C.CardBody className="p-4">
                    <C.Row>
                        <h2 className="text-center afastar">{dados.nomeCategoria}</h2>
                        <C.Col lg="6">
                            <img src={dados.fotoCategoria} className="afastar" width="100%"/>
                        </C.Col>
                        <C.Col lg="6">
                        <p>{dados.descricaoCategoria}</p>
                        </C.Col>
                    </C.Row>
                </C.CardBody>
            </C.Card>
            ))}
        </C.Row>
    )
}