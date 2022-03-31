import * as C from "reactstrap";


export function PostagemCategoria(){
    return(
        <C.Row>
            <h2>Postar categoria</h2>
            <C.Col lg="12">
            <C.Form>
                <C.Row>
                    <C.Col lg="6">
                        <C.Label>Imagem da categoria</C.Label>
                        <C.Input type="url" name="fotoCategoria" id="fotoCategiria"
                            placeholder="Digite a url da imagem"
                        />
                    </C.Col>
                    <C.Col lg="6">
                        <C.Label>Título da categoria</C.Label>
                        <C.Input type="text" name="nomeCategoria" id="nomeCategoria"
                            placeholder="Digite o título da sua categoria"
                        />
                    </C.Col>
                    <C.Col lg="12">
                        <C.Label>Descrição da categoria</C.Label>
                        <C.Input type="textarea" id="descricaoCategoria"
                            placeholder="Descreva o que será visualizado pelo cliente sobre a categoria" rows="4"
                        />
                    </C.Col>
                    <C.Col lg="4">
                        <C.Button color="primary">Postar categoria</C.Button>
                    </C.Col>
                </C.Row>
            </C.Form>
            </C.Col>
        </C.Row>
    )
}