import { useState, useEffect } from "react";
import * as C from "reactstrap";
import { VisualizarCategoria } from "../../services/api-rotas/api-rotas-categoria";
import api from "../../services/api";
import { Link } from "react-router-dom";

export function TableCategoria(){

    const [categorias, setCategorias] = useState([]);
    const [erro, setErro] = useState("");

    const getVisualizarCategorias = async () => {
        const response = await VisualizarCategoria();
        console.log(response);

        setCategorias(response);
    }

    useEffect(() => {
        getVisualizarCategorias()
    },[])

    function deletarCategoria(id){
        api.delete(`categoria/${id}`)
            .catch(error => {
                if(error.response.data == "SequelizeForeignKeyConstraintError"){
                    setErro("Não é possível remover essa categoria!");
                }

                setTimeout(function(){
                    window.location.href = "/categoria";
                },1000)
            })

        setCategorias(categorias.filter(categoria => categoria.idCategoria !== id));
    }

    return(
        <div>
            <C.Card>
                <C.CardBody>
                    <C.CardTitle tag="h5">Listagem de Categorias</C.CardTitle>
                    <C.CardSubtitle className="mb-2 text-muted" tag="h6">
                        Categorias do sistema
                    </C.CardSubtitle>

                    {erro !== "" ? (
                        <C.Alert color="danger">{erro}</C.Alert>
                    ): ""}

                    <C.Table className="no-wrap mt-3 align-middle text-center" responsive borderless>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Foto da Categoria</th>
                                <th>Nome da Categoria</th>
                                <th>Configurações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {categorias.length > 0 ? categorias.map((dados, index) => (
                                <tr key={index} className="border-top">
                                    <td>00{index + 1}</td>
                                    <td>
                                        <img src={dados.fotoCategoria}
                                            width="80"
                                        />
                                    </td>
                                    <td>{dados.nomeCategoria}</td>
                                    <td>
                                        <Link to={{ pathname: `/atualizar-categoria/${dados.idCategoria}` }}>
                                            <button className="btn btn-primary">
                                                <i className="fa fa-edit"></i>
                                            </button>
                                        </Link>
                                        <button className="btn btn-danger" onClick={() => deletarCategoria(dados.idCategoria)}>
                                            <i className="fa fa-trash"></i>
                                        </button>

                                        <Link to={{ pathname: `/visualizar-categoria/${dados.idCategoria}` }}>
                                            <button className="btn btn-secondary">
                                                <i className="fa fa-eye"></i>
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                                )): (
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