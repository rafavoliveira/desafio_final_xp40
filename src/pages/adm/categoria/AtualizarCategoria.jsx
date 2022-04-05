import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import * as C from "reactstrap";
import api from "../../../services/api";
import { CategoriaSelecionada } from "../../../services/api-rotas/api-rotas-categoria";
import JoditEditor from "jodit-react";

export function AtualizarCategoria(){

    const editor = useRef(null);

    const config = {
        readonly: false, height: 100,
    }

    const { id } = useParams();

    const [categoria, setCategoria] = useState([]);

    const [fotoCategoria, setFotoCategoria] = useState("");
    const [nomeCategoria, setNomeCategoria] = useState("");
    const [descricaoCategoria, setDescricaoCategoria] = useState("");
    const [mensagem, setMensagem] = useState("");

    const getCategoriaSelecionada = async () =>{
        const response = await CategoriaSelecionada();

        setFotoCategoria(response[0].fotoCategoria);
        setNomeCategoria(response[0].nomeCategoria);
        setDescricaoCategoria(response[0].descricaoCategoria);

        setCategoria(response);
    }

    const AtualizarFotoCategoria = (event) =>{
        setFotoCategoria(event.target.value);
    }
    const AtualizarNomeCategoria = (event) =>{
        setNomeCategoria(event.target.value);
    }
    const AtualizarDescricaoCategoria = (event) =>{
        setDescricaoCategoria(event.target.value);
    }

    const EnviarDados = async () =>{
        const data = {
            fotoCategoria: fotoCategoria, nomeCategoria: nomeCategoria, 
            descricaoCategoria: descricaoCategoria,
        }
        console.log(data);
        try{
            const response = await api.put("/categoria/"+id, data);

            setTimeout(function(){
                window.location.href = "/categoria";
            }, 2000)

            setMensagem("Categoria atualizada com sucesso!");
        }catch(error){
            setMensagem("Ocorreu um erro ao tentar atualizar a categoria");
        }
    }

    useEffect(() => {
        getCategoriaSelecionada()
    },[]);
    
    return(
        <C.Row>
            <h2>Atualizar categoria</h2>
            <C.Col lg="12">
                <C.Form>
                    {mensagem !== "" ? (
                        <C.Alert color="secondary">
                            {mensagem}
                        </C.Alert>
                    ): ""}
                    <C.Row>
                        <C.Col lg="6">
                            <C.Label>Imagem da categoria</C.Label>
                            <C.Input type="url" name="fotoCategoria" id="fotoCategoria"
                                placeholder="Atualize a imagem da categoria"
                                value={fotoCategoria}
                                onChange={AtualizarFotoCategoria}
                            />
                        </C.Col>
                        <C.Col lg="6">
                            <C.Label>Título da categoria</C.Label>
                            <C.Input type="text" name="nomeCategoria" id="nomeCategoria"
                                placeholder="Atualize o título da categoria"
                                value={nomeCategoria}
                                onChange={AtualizarNomeCategoria}
                            />
                        </C.Col>
                        <C.Col lg="12">
                            <C.Label>Descrição da categoria</C.Label>
                            <JoditEditor
                            ref={editor}
                            value={descricaoCategoria}
                            config={config}
                            tabIndex={1}
                            onBlur={(newContent) => setDescricaoCategoria(newContent)}
                            onChange={(newContent) => {}}
                        />
                        </C.Col>
                        <C.Col lg="4">
                            <C.Button color="primary" onClick={EnviarDados}>
                                Atualizar categoria
                            </C.Button>
                        </C.Col>
                    </C.Row>
                </C.Form>
            </C.Col>
        </C.Row>
    )
}