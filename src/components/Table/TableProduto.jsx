import * as C from "reactstrap";

const Dados = [
    { id: 1, foto: "https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png", nome: "Full Stack Devolper", categoria: "Hackers" },
    { id: 2, foto: "https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png", nome: "UX Designer", categoria: "Hipsters" },
    { id: 3, foto: "https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png", nome: "Vendas", categoria: "Hustlers" },
    { id: 4, foto: "https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png", nome: "Comércio", categoria: "Hypers" }
]

export function TableProduto(){
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
                            {Dados.map((dados, index) => (
                                <tr key={index} className="border-top">
                                    <td>00{dados.id}</td>
                                    <td>
                                        <img src={dados.foto}
                                            className="rounded-circle"
                                            width="80"
                                        />
                                    </td>
                                    <td>{dados.nome}</td>
                                    <td>{dados.categoria}</td>
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