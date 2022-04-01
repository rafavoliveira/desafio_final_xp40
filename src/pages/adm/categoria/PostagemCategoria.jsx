import { useState } from "react";
import * as C from "reactstrap";
import api from "../../../services/api";


export function PostagemCategoria(){
    
    const [imagemCategoria, setImagemCategoria] = useState("");
    const [nomeCategoria, setNomeCategoria] = useState("");
    const [descricaoCategoria, setDescricaoCategoria] = useState("");
    const [mensagem, setMensagem] = useState("");

    const EnviarImagemCategoria = (event) =>{
        setImagemCategoria(event.target.value);
    }
    const EnviarNomeCategoria = (event) => {
        setNomeCategoria(event.target.value);
    }
    const EnviarDescricaoCategoria = (event) => {
        setDescricaoCategoria(event.target.value);
    }

    const EnviarDados = (event) => {
        const data = { 
            fotoCategoria: imagemCategoria, 
            nomeCategoria: nomeCategoria, descricaoCategoria: descricaoCategoria,
        }
        api.post("/categoria", data)
            .then(res => {
                setTimeout(function(){
                    window.location.href = "/categoria";
                },1000)
                setMensagem("Os seus dados foram cadastrados com sucesso!");
            })
            .catch(error => {
                if(error.response.data.name == "ValidationError"){
                    setMensagem("Verifique se todos os campos estão corretos ");
                }
            })

    }

    return(
        <C.Row>
            <h2>Postar categoria</h2>
            <C.Col lg="12">
                {mensagem !== "" ? (
                    <C.Alert color="secondary">
                        {mensagem}
                    </C.Alert>
                ):""}
            <C.Form>
                <C.Row>
                    <C.Col lg="6">
                        <C.Label>Imagem da categoria</C.Label>
                        <C.Input type="url" name="fotoCategoria" id="fotoCategiria"
                            placeholder="Digite a url da imagem"
                            onChange={EnviarImagemCategoria}
                        />
                    </C.Col>
                    <C.Col lg="6">
                        <C.Label>Título da categoria</C.Label>
                        <C.Input type="text" name="nomeCategoria" id="nomeCategoria"
                            placeholder="Digite o título da sua categoria"
                            onChange={EnviarNomeCategoria}
                        />
                    </C.Col>
                    <C.Col lg="12">
                        <C.Label>Descrição da categoria</C.Label>
                        <C.Input type="textarea" id="descricaoCategoria"
                            placeholder="Descreva o que será visualizado pelo cliente sobre a categoria" rows="4"
                            onChange={EnviarDescricaoCategoria}
                        />
                    </C.Col>
                    <C.Col lg="4">
                        <C.Button color="primary" onClick={EnviarDados}>Postar categoria</C.Button>
                    </C.Col>
                </C.Row>
            </C.Form>
            </C.Col>
        </C.Row>
    )
}