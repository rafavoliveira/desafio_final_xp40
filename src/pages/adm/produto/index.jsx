import * as C from "reactstrap";
import { TableProduto } from "../../../components/Table/TableProduto";
import { Link } from "react-router-dom";

export function Produto(){
    return(
        <C.Row>
            <h3 className="mb-3 mt-3">Produtos</h3>
            <C.CardBody>
                <C.Breadcrumb>
                    <C.BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </C.BreadcrumbItem>
                    <C.BreadcrumbItem active>Produtos</C.BreadcrumbItem>
                </C.Breadcrumb>

                <C.Breadcrumb>
                    <C.BreadcrumbItem>
                        <Link to="/cadastrar-produto">Adicionar produto</Link>
                    </C.BreadcrumbItem>
                </C.Breadcrumb>
            </C.CardBody>

            <C.Col lg="12">
                <TableProduto/>
            </C.Col>
        </C.Row>
    );
}