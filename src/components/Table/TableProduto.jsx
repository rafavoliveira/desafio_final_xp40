import { useState, useEffect } from "react";
import * as C from "reactstrap";
import { VisualizarProduto } from "../../services/api-rotas/api-rotas-produto";
import api from "../../services/api";
import { Link } from "react-router-dom";

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
                            {produtos.length > 0 ? produtos.map((dados, index) => (
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
                                        <Link to={{ pathname: `/atualizar-produto/${dados.idProduto}` }}>
                                            <button className="btn btn-primary">
                                                <i className="fa fa-edit"></i>
                                            </button>
                                        </Link>
                                        <button className="btn btn-danger" onClick={() => deletarProduto(dados.idProduto)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                        <Link to={{ pathname: `/visualizar-produto/${dados.idProduto}` }}>
                                            <button className="btn btn-secondary">
                                                <i className="fa fa-eye"></i>
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                                )):(
                                <tr>
                                    <td colSpan="5">
                                        <C.Alert color="danger">
                                            Não há dados para serem exibidos!
                                        </C.Alert>
                                    </td>
                                </tr>
                                )}
                        </tbody>
                    </C.Table>
                </C.CardBody>
            </C.Card>
        </div>
    )
}