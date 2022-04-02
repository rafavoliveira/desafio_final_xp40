import * as C from "reactstrap";

export function AtualizarProduto(){
    return(
        <C.Row>
            <h2>Atualizar produto</h2>
            <C.Col lg="12">
                <C.Form>
                    <C.Row>
                        <C.Col lg="4">
                            <C.Label>Imagem do produto</C.Label>
                            <C.Input type="url" name="fotoProduto" id="fotoProduto"
                                placeholder="Atualize a url da imagem"
                            />
                        </C.Col>
                        <C.Col lg="4">
                            <C.Label>Título da categoria</C.Label>
                            <C.Input type="text" name="nomeProduto" id="nomeProduto"
                                placeholder="Atualize o título do seu produto"
                            />
                        </C.Col>
                        <C.Col lg="4">
                            <C.Label>Selecione a categoria</C.Label>
                            <C.Input type="select" name="categoriaId" id="categoriaId">
                                <option>Tecnologia</option>
                            </C.Input>
                        </C.Col>
                        <C.Col lg="12">
                            <C.Label>Descrição da categoria</C.Label>
                            <C.Input type="textarea" name="descricaoProduto"
                                id="descricaoProduto" 
                                placeholder="Atualize a descrição da categoria"
                                rows="4"
                            />
                        </C.Col>
                        <C.Col lg="4">
                            <C.Button color="primary">Atualizar produto</C.Button>
                        </C.Col>
                    </C.Row>
                </C.Form>
            </C.Col>
        </C.Row>
    )
}