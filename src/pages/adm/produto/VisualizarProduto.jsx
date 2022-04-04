import { useState, useEffect } from "react";
import { ProdutoSelecionado } from "../../../services/api-rotas/api-rotas-produto";
import * as C from "reactstrap";

export function VisualizarProduto(){

    const [produto, setProduto] = useState([]);

    const getProdutoSelecionado = async () => {
        const response = await ProdutoSelecionado();

        setProduto(response);
    }

    useEffect(() => {
        getProdutoSelecionado()
    },[])

    console.log(produto);

    return(
        <C.Row>
            {produto.map((dado, index) => (
            <C.Card key={index}>
                <C.CardTitle tag="h6" className="border-bottom p-3 mb-0">
                    {dado.nomeProduto} - {dado.categorium.nomeCategoria}
                </C.CardTitle>
                <C.CardBody className="p-4">
                    <C.Row>
                        <C.Col lg="4">
                            <C.Alert color="secondary">
                                Carga - Horária: {dado.cargaHorariaProduto}h
                            </C.Alert>
                        </C.Col>
                        <C.Col lg="4">
                            <C.Alert color="secondary">
                                Dias da semana: {dado.diasSemanaProduto} 
                            </C.Alert>
                        </C.Col>
                        <C.Col lg="4">
                            <C.Alert color="secondary">
                                Data das semanas: {dado.dataSemanaProduto}
                            </C.Alert>
                        </C.Col>
                        <C.Col lg="6">
                        <h2 className="afastar text-center">Produto: {dado.nomeProduto}</h2>
                            <img src={dado.fotoProduto} width="80%"/>
                            <p>{dado.descricaoProduto}</p>
                        </C.Col>
                        <C.Col lg="6">
                        <h2 className="afastar text-center">Categoria: {dado.categorium.nomeCategoria}</h2>
                            <img src={dado.categorium.fotoCategoria} width="80%"/>
                            <p>{dado.categorium.descricaoCategoria}</p>
                        </C.Col>
                    </C.Row>
                </C.CardBody>
            </C.Card>
            ))}
        </C.Row>
    )
}