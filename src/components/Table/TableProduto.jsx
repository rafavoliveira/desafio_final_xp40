import { useState, useEffect } from "react";
import * as C from "reactstrap";
import { VisualizarProduto } from "../../services/api-rotas/api-rotas-produto";
import api from "../../services/api";

export function TableProduto(){

    const [produtos, setProdutos] = useState([]);

    const getVisualizarProdutos = async () => {
        const response = await VisualizarProduto();

        setProdutos(response);
    }

    useEffect(() => {
        getVisualizarProdutos()
    }, [])

    function deletarProduto(id){
        api.delete(`produto/${id}`);

        setProdutos(produtos.filter(produto => produto.idProduto !== id));
    }

    return(
        <div>
            <C.Card>
                <C.CardBody>
                    <C.CardTitle tag="h5">Listagem de Produtos</C.CardTitle>
                    <C.CardSubtitle className="mb-2 text-muted" tag="h6">
                        Produtos do sistema
                    </C.CardSubtitle>

                    <C.Table className="no-wrap mt-3 align-middle text-center" responsive borderless>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Foto da Produto</th>
                                <th>Nome do Produto</th>
                                <th>Nome da Categoria</th>
                                <th>Configurações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {produtos.map((dados, index) => (
                                <tr key={index} className="border-top">
                                    <td>00{index + 1}</td>
                                    <td>
                                        <img src={dados.fotoProduto}
                                            width="80"
                                        />
                                    </td>
                                    <td>{dados.nomeProduto}</td>
                                    <td>{dados.categorium.nomeCategoria}</td>
                                    <td>
                                        <button className="btn btn-primary">
                                            <i className="fa fa-edit"></i>
                                        </button>
                                        <button className="btn btn-danger" onClick={() => deletarProduto(dados.idProduto)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                        <button className="btn btn-secondary">
                                            <i className="fa fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </C.Table>
                </C.CardBody>
            </C.Card>
        </div>
    )
}