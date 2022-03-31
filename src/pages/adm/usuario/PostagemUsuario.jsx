import * as C from "reactstrap";


export function PostagemUsuario(){
    return(
        <C.Row>
            <h2>Postar usuário</h2>
            <C.Col lg="12">
            <C.Form>
                <C.Row>
                    <C.Col lg="6">
                        <C.Label>Imagem da usuário</C.Label>
                        <C.Input type="url" name="fotoUsuario" id="fotoUsuario"
                            placeholder="Digite a url da imagem"
                        />
                    </C.Col>
                    <C.Col lg="6">
                        <C.Label>Nome do usuário</C.Label>
                        <C.Input type="text" name="nomeUsuario" id="nomeUsuario"
                            placeholder="Digite o nome do usuário"
                        />
                    </C.Col>
                    <C.Col lg="6">
                        <C.Label>Email do usuário</C.Label>
                        <C.Input type="email" name="emailUsuario" id="emailUsuario"
                            placeholder="Digite o email do usuário"
                        />
                    </C.Col>
                    <C.Col lg="6">
                        <C.Label>Senha do usuário</C.Label>
                        <C.Input type="password" name="senhaUsuario" id="senhaUsuario"
                            placeholder="Digite a senha do usuário"
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