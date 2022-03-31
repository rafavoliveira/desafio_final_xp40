import * as C from "reactstrap";


export function PostagemProduto(){
    return(
        <C.Row>
            <h2>Postar produto</h2>
            <C.Col lg="12">
            <C.Form>
                <C.Row>
                    <C.Col lg="4">
                        <C.Label>Imagem da produto</C.Label>
                        <C.Input type="url" name="fotoProduto" id="fotoProduto"
                            placeholder="Digite a url da imagem"
                        />
                    </C.Col>
                    <C.Col lg="4">
                        <C.Label>Título da categoria</C.Label>
                        <C.Input type="text" name="nomeProduto" id="nomeProduto"
                            placeholder="Digite o título do seu produto"
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
                        <C.Input type="textarea" name="descricaoProduto" id="descricaoProduto" placeholder="Descreva o que será visualizado pelo cliente sobre o produto" rows="4"
                        />
                    </C.Col>
                    <C.Col lg="4">
                        <C.Button color="primary">Postar produto</C.Button>
                    </C.Col>
                </C.Row>
            </C.Form>
            </C.Col>
        </C.Row>
    )
}