import * as C from "reactstrap";
import { TableUsuario } from "../../../components/Table/TableUsuario";
import { Link } from "react-router-dom";

export function Usuario(){
    return(
        <C.Row>
            <h3 className="mb-3 mt-3">Usuários</h3>
            <C.CardBody>
                <C.Breadcrumb>
                    <C.BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </C.BreadcrumbItem>
                    <C.BreadcrumbItem active>Usuários</C.BreadcrumbItem>
                </C.Breadcrumb>

                <C.Breadcrumb>
                    <C.BreadcrumbItem>
                        <Link to="/cadastrar-usuario">Adicionar usuário</Link>
                    </C.BreadcrumbItem>
                </C.Breadcrumb>
            </C.CardBody>

            <C.Col lg="12">
                <TableUsuario/>
            </C.Col>
        </C.Row>
    );
}