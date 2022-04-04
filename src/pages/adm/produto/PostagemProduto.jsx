import * as C from "reactstrap";
import { useState, useEffect } from "react";
import { VisualizarCategoria } from "../../../services/api-rotas/api-rotas-categoria";
import api from "../../../services/api";


export function PostagemProduto(){

    const [categorias, setCategorias] = useState([]);

    const [imagemProduto, setImagemProduto] = useState("");
    const [nomeProduto, setNomeProduto] = useState("");
    const [descricaoProduto, setDescricaoProduto] = useState("");
    const [categoriaId, setCategoriaId] = useState("");

    const [mensagem, setMensagem] = useState("");

    const EnviarImagemProduto = (event) => {
        setImagemProduto(event.target.value);
    }
    const EnviarNomeProduto = (event) => {
        setNomeProduto(event.target.value);
    }
    const EnviarDescricaoProduto = (event) => {
        setDescricaoProduto(event.target.value);
    }
    const EnviarCategoriaId = (event) => {
        setCategoriaId(event.target.value);
    }

    const EnviarDados = () => {
        const data = {
            fotoProduto: imagemProduto, nomeProduto: nomeProduto, 
            descricaoProduto: descricaoProduto, categoriaId: categoriaId
        }
        console.log(data);
        api.post("/produto", data)
            .then(res => {
                setTimeout(function(){
                    window.location.href = "/produto";
                },1000)
                setMensagem("Os seus dados foram cadastrados com sucesso!");
            })
            .catch(error => {
                if(error.response.data.name == "ValidationError"){
                    setMensagem("Verifique se todos os campos estão corretos ");
                }
            })
    }

    const getCategorias = async () => {
        const response = await VisualizarCategoria();

        setCategorias(response);
    }

    useEffect(() => {
        getCategorias()
    },[])

    return(
        <C.Row>
            <h2>Postar produto</h2>
            <C.Col lg="12">
                {mensagem !== "" ? (
                    <C.Alert color="secondary">{mensagem}</C.Alert>
                ): ""}
            <C.Form>
                <C.Row>
                    <C.Col lg="4">
                        <C.Label>Imagem da produto</C.Label>
                        <C.Input type="url" name="fotoProduto" id="fotoProduto"
                            placeholder="Digite a url da imagem"
                            onChange={EnviarImagemProduto}
                        />
                    </C.Col>
                    <C.Col lg="4">
                        <C.Label>Título da categoria</C.Label>
                        <C.Input type="text" name="nomeProduto" id="nomeProduto"
                            placeholder="Digite o título do seu produto"
                            onChange={EnviarNomeProduto}
                        />
                    </C.Col>
                    <C.Col lg="4">
                        <C.Label>Selecione a categoria</C.Label>
                        <C.Input type="select" name="categoriaId" id="categoriaId"
                            onChange={EnviarCategoriaId}>
                            <option value="">Selecione alguma categoria</option>
                            {categorias.length > 0 ? categorias.map((dados, index) => (
                                <option key={index} value={dados.idCategoria}>{dados.nomeCategoria}</option>
                            )):(
                                <option value="">Não existe categorias adicionadas!</option>
                            )}
                        </C.Input>
                    </C.Col>
                    <C.Col lg="12">
                        <C.Label>Descrição da categoria</C.Label>
                        <C.Input type="textarea" name="descricaoProduto" id="descricaoProduto" placeholder="Descreva o que será visualizado pelo cliente sobre o produto" rows="4"
                        onChange={EnviarDescricaoProduto}
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