import * as C from "reactstrap";

const Dados = [
    { id: 1, nome: "mateus de sousa maciel", email: "mateus12345@gmail.com" },
]

export function TableUsuario(){
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
                                <th>Email do Usuário</th>
                                <th>Configurações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Dados.map((dados, index) => (
                                <tr key={index} className="border-top">
                                    <td>00{dados.id}</td>
                                    <td>{dados.nome}</td>
                                    <td>{dados.email}</td>
                                    <td>
                                        <button className="btn btn-primary">
                                            <i className="fa fa-edit"></i>
                                        </button>
                                        <button className="btn btn-danger">
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