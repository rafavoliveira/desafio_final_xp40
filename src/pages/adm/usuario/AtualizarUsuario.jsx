import { useState, useEffect } from "react";
import { UsuarioSelecionado } from "../../../services/api-rotas/api-rotas-usuario";
import * as C from "reactstrap";
import api from "../../../services/api";
import { useParams } from "react-router-dom";

export function AtualizarUsuario(){

    const { id } = useParams();

    const [usuario, setUsuario] = useState([]);

    const getUsuarioSelecionado = async () => {
        const response = await UsuarioSelecionado();

        setUsuario(response);
    }

    useEffect(() =>{
        getUsuarioSelecionado()
    },[]);

    const [fotoUsuario, setFotoUsuario] = useState("");
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [emailUsuario, setEmailUsuario] = useState("");
    const [senhaUsuario, setSenhaUsuario] = useState("");
    const [mensagem, setMensagem] = useState("");

    const AtualizarFotoUsuario = (event) => {
        setFotoUsuario(event.target.value);
    }
    const AtualizarNomeUsuario = (event) => {
        setNomeUsuario(event.target.value);
    }
    const AtualizarEmailUsuario = (event) => {
        setEmailUsuario(event.target.value);
    }
    const AtualizarSenhaUsuario = (event) => {
        setSenhaUsuario(event.target.value);
    }

    const EnviarDados = async () => {
        const data = {
            fotoUsuario: fotoUsuario, nomeUsuario: nomeUsuario,
            emailUsuario: emailUsuario, senhaUsuario: senhaUsuario,
        }
        try{
            const response = await api.put("/usuario/"+id, data);

            setMensagem("Usuário atualizado com sucesso!");

        }catch(error){
            setMensagem("Ocorreu um erro ao tentar atualizar o usuário!");
        }
    }

    return(
        <C.Row>
            <h2>Atualizar usuário</h2>
            <C.Col lg="12">
                <C.Form>
                    {mensagem !== "" ? (
                        <C.Alert color="secondary">
                            {mensagem}
                        </C.Alert>
                    ): ""}
                    <C.Row>
                        <C.Col lg="6">
                            <C.Label>Imagem do usuário</C.Label>
                            <C.Input type="url" name="fotoUsuario" id="fotoUsuario"
                                placeholder="Atualize a url da imagem"
                                onChange={AtualizarFotoUsuario}
                            />
                        </C.Col>
                        <C.Col lg="6">
                            <C.Label>Nome do usuário</C.Label>
                            <C.Input type="text" name="nomeUsuario" id="nomeUsuario"
                                placeholder="Atualize o nome do usuário"
                                onChange={AtualizarNomeUsuario}
                            />
                        </C.Col>
                        <C.Col lg="6">
                            <C.Label>Email do usuário</C.Label>
                            <C.Input type="email" name="emailUsuario" id="emailUsuario"
                                placeholder="Atualize o email do usuário"
                                onChange={AtualizarEmailUsuario}
                            />
                        </C.Col>
                        <C.Col lg="6">
                            <C.Label>Senha do usuário</C.Label>
                            <C.Input type="password" name="senhaUsuario"
                                id="senhaUsuario" placeholder="Atualize a senha do usuário"
                                onChange={AtualizarSenhaUsuario}
                            />
                        </C.Col>
                        <C.Col lg="4">
                            <C.Button color="primary" onClick={EnviarDados}>
                                Atualizar usuário
                            </C.Button>
                        </C.Col>
                    </C.Row>
                </C.Form>
            </C.Col>
        </C.Row>
    )
}