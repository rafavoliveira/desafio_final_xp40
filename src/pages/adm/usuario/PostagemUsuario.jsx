import * as C from "reactstrap";
import { useState } from "react";
import api from "../../../services/api";

export function PostagemUsuario(){

    const [imagemUsuario, setImagemUsuario] = useState("");
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [emailUsuario, setEmailUsuario] = useState("");
    const [senhaUsuario, setSenhaUsuario] = useState("");

    const [mensagem, setMensagem] = useState("");

    const EnviarImagemUsuario = (event) => {
        setImagemUsuario(event.target.value);
    }
    const EnviarNomeUsuario = (event) => {
        setNomeUsuario(event.target.value);
    }
    const EnviarEmailUsuario = (event) => {
        setEmailUsuario(event.target.value);
    }
    const EnviarSenhaUsuario = (event) => {
        setSenhaUsuario(event.target.value);
    }

    const EnviarDados = () => {
        const data = {
            fotoUsuario: imagemUsuario, nomeUsuario: nomeUsuario,
            emailUsuario: emailUsuario, senhaUsuario: senhaUsuario
        }
        api.post("/usuario", data)
            .then(res => {
                setTimeout(function(){
                    window.location.href = "/usuario";
                },1000)
                setMensagem("Os seus dados foram cadastrados com sucesso!")
            })
            .catch(error =>{
                if(error.response.data.name == "ValidationError"){
                    setMensagem("Verifique se todos os campos estão corretos ");
                }
            })
    }

    return(
        <C.Row>
            <h2>Postar usuário</h2>
            <C.Col lg="12">
                {mensagem !== "" ? (
                    <C.Alert color="secondary">
                        {mensagem}
                    </C.Alert>
                ): ""}
            <C.Form>
                <C.Row>
                    <C.Col lg="6">
                        <C.Label>Imagem da usuário</C.Label>
                        <C.Input type="url" name="fotoUsuario" id="fotoUsuario"
                            placeholder="Digite a url da imagem"
                            onChange={EnviarImagemUsuario}
                        />
                    </C.Col>
                    <C.Col lg="6">
                        <C.Label>Nome do usuário</C.Label>
                        <C.Input type="text" name="nomeUsuario" id="nomeUsuario"
                            placeholder="Digite o nome do usuário"
                            onChange={EnviarNomeUsuario}
                        />
                    </C.Col>
                    <C.Col lg="6">
                        <C.Label>Email do usuário</C.Label>
                        <C.Input type="email" name="emailUsuario" id="emailUsuario"
                            placeholder="Digite o email do usuário"
                            onChange={EnviarEmailUsuario}
                        />
                    </C.Col>
                    <C.Col lg="6">
                        <C.Label>Senha do usuário</C.Label>
                        <C.Input type="password" name="senhaUsuario" id="senhaUsuario"
                            placeholder="Digite a senha do usuário"
                            onChange={EnviarSenhaUsuario}
                        />
                    </C.Col>
                    <C.Col lg="4">
                        <C.Button color="primary" onClick={EnviarDados}>Postar produto</C.Button>
                    </C.Col>
                </C.Row>
            </C.Form>
            </C.Col>
        </C.Row>
    )
}