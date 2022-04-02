import { useState, useEffect } from "react";
import * as C from "reactstrap";
import { VisualizarUsuario } from "../../services/api-rotas/api-rotas-usuario";
import api from "../../services/api";
import { Link } from "react-router-dom";

export function TableUsuario(){

    const [usuarios, setUsuarios] = useState([]);

    const getVisualizarUsuarios = async () => {
        const response = await VisualizarUsuario();

        setUsuarios(response);
    }

    useEffect(() => {
        getVisualizarUsuarios()
    },[])

    function deletarUsuario(id){
        api.delete(`usuario/${id}`);

        setUsuarios(usuarios.filter(usuario => usuario.idUsuario !== id));
    }

    return(
        <div>
            <C.Card>
                <C.CardBody>
                    <C.CardTitle tag="h5">Listagem de Usuários</C.CardTitle>
                    <C.CardSubtitle className="mb-2 text-muted" tag="h6">
                        Usuários do sistema
                    </C.CardSubtitle>

                    <C.Table className="no-wrap mt-3 align-middle text-center" responsive borderless>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome do Usuário</th>
                                <th>Foto do Usuário</th>
                                <th>Email do Usuário</th>
                                <th>Configurações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {usuarios.map((dados, index) => (
                                <tr key={index} className="border-top">
                                    <td>00{index + 1}</td>
                                    <td>
                                        <img src={dados.fotoUsuario}
                                            className="rounded-circle"
                                            width="80"
                                        />
                                    </td>
                                    <td>{dados.nomeUsuario}</td>
                                    <td>{dados.emailUsuario}</td>
                                    <td>
                                        <Link to={{ pathname: `/atualizar-usuario/${dados.idUsuario}` }}>
                                        <button className="btn btn-primary">
                                            <i className="fa fa-edit"></i>
                                        </button>
                                        </Link>
                                        <button className="btn btn-danger" onClick={() => deletarUsuario(dados.idUsuario)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                        <Link to={{ pathname: `/visualizar-usuario/${dados.idUsuario}` }}>
                                        <button className="btn btn-secondary">
                                            <i className="fa fa-eye"></i>
                                        </button>
                                        </Link>
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