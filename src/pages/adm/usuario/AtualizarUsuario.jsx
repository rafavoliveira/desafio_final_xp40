import * as C from "reactstrap";

export function AtualizarUsuario(){
    return(
        <C.Row>
            <h2>Atualizar usuário</h2>
            <C.Col lg="12">
                <C.Form>
                    <C.Row>
                        <C.Col lg="6">
                            <C.Label>Imagem do usuário</C.Label>
                            <C.Input type="url" name="fotoUsuario" id="fotoUsuario"
                                placeholder="Atualize a url da imagem"
                            />
                        </C.Col>
                        <C.Col lg="6">
                            <C.Label>Nome do usuário</C.Label>
                            <C.Input type="text" name="nomeUsuario" id="nomeUsuario"
                                placeholder="Atualize o nome do usuário"
                            />
                        </C.Col>
                        <C.Col lg="6">
                            <C.Label>Email do usuário</C.Label>
                            <C.Input type="email" name="emailUsuario" id="emailUsuario"
                                placeholder="Atualize o email do usuário"
                            />
                        </C.Col>
                        <C.Col lg="6">
                            <C.Label>Senha do usuário</C.Label>
                            <C.Input type="password" name="senhaUsuario"
                                id="senhaUsuario" placeholder="Atualize a senha do usuário"
                            />
                        </C.Col>
                        <C.Col lg="4">
                            <C.Button color="primary">Atualizar usuário</C.Button>
                        </C.Col>
                    </C.Row>
                </C.Form>
            </C.Col>
        </C.Row>
    )
}