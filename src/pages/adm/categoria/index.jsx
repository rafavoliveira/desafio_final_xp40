import * as C from "reactstrap";
import { Link } from "react-router-dom";
import { TableCategoria } from "../../../components/Table/TableCategoria";

export function Categoria(){
    return(
        <C.Row>
            <h3 className="mb-3 mt-3">Categorias</h3>
            <C.CardBody>
                <C.Breadcrumb>
                    <C.BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </C.BreadcrumbItem>
                    <C.BreadcrumbItem active>Categorias</C.BreadcrumbItem>
                </C.Breadcrumb>
                
                <C.Breadcrumb>
                    <C.BreadcrumbItem>
                        <Link to="/cadastrar-categoria">Adicionar categoria</Link>
                    </C.BreadcrumbItem>
                </C.Breadcrumb>
            </C.CardBody>

            <C.Col lg="12">
                <TableCategoria/>
            </C.Col>
        </C.Row>
    )
}