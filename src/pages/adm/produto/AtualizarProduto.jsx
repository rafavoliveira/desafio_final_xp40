import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as C from "reactstrap";
import api from "../../../services/api";
import { ProdutoSelecionado } from "../../../services/api-rotas/api-rotas-produto";
import { VisualizarCategoria } from "../../../services/api-rotas/api-rotas-categoria";

export function AtualizarProduto(){

    const { id } = useParams();

    const [produto, setProduto] = useState([]);
    const [categoria, setCategoria] = useState([]);

    const [fotoProduto, setFotoProduto] = useState("");
    const [nomeProduto, setNomeProduto] = useState("");
    const [categoriaProduto, setCategoriaProduto] = useState("");
    const [descricaoProduto, setDescricaoProduto] = useState("");
    const [cargaHorariaProduto, setCargaHoraria] = useState("");
    const [diasSemanaProduto, setDiaSemana] = useState("");
    const [dataSemanaProduto, setDataSemana] = useState("");
    const [categoriaProdutoId, setCategoriaProdutoId] = useState("");
    const [mensagem, setMensagem] = useState("");

    const getProdutoSelecionado = async () => {
        const response = await ProdutoSelecionado();

        setFotoProduto(response[0].fotoProduto);
        setNomeProduto(response[0].nomeProduto);
        setCategoriaProduto(response[0].categorium.nomeCategoria);
        setCategoriaProdutoId(response[0].categoriaId);
        setDescricaoProduto(response[0].descricaoProduto);
        setCargaHoraria(response[0].cargaHorariaProduto);
        setDiaSemana(response[0].diasSemanaProduto);
        setDataSemana(response[0].dataSemanaProduto);

        setProduto(response);
    }

    const getCategorias = async () =>{
        const response = await VisualizarCategoria();

        setCategoria(response);
    }

    useEffect(() => {
        getProdutoSelecionado();
        getCategorias();
    },[])

    const AtualizarFotoProduto = (event) =>{
        setFotoProduto(event.target.value);
    }
    const AtualizarNomeProduto = (event) =>{
        setNomeProduto(event.target.value);
    }
    const AtualizarCategoriaProduto = (event) =>{
        setCategoriaProduto(event.target.value);
    }
    const AtualizarDescricaoProduto = (event) =>{
        setDescricaoProduto(event.target.value);
    }

    const AtualizarCargaHoraria = (event) => {setCargaHoraria(event.target.value)}
    const AtualizarDiaSemana = (event) => {setDiaSemana(event.target.value)}
    const AtualizarDataSemana = (event) => {setDataSemana(event.target.value)}

    const EnviarDados = async () =>{
        const data = {
            fotoProduto: fotoProduto, nomeProduto: nomeProduto,
            descricaoProduto: descricaoProduto, cargaHorariaProduto: cargaHorariaProduto,
            diasSemanaProduto: diasSemanaProduto, dataSemanaProduto: dataSemanaProduto,
            categoriaId: categoriaProdutoId,
        }
        try{
            const response = await api.put("/produto/"+id, data);

            setTimeout(function(){
                window.location.href = "/produto";
            },2000)

            setMensagem("Produto atualizado com sucesso!");
        }catch(error){
            setMensagem("Ocorreu um erro ao tentar atualizar o produto!")
        }
    }

    return(
        <C.Row>
            <h2>Atualizar produto</h2>
            <C.Col lg="12">
                <C.Form>
                    {mensagem !== "" ? (
                        <C.Alert color="secondary">
                            {mensagem}
                        </C.Alert>
                    ):""}
                    <C.Row>
                        <C.Col lg="4">
                            <C.Label>Imagem do produto</C.Label>
                            <C.Input type="url" name="fotoProduto" id="fotoProduto"
                                placeholder="Atualize a url da imagem"
                                onChange={AtualizarFotoProduto}
                                value={fotoProduto}
                            />
                        </C.Col>
                        <C.Col lg="4">
                            <C.Label>Título da categoria</C.Label>
                            <C.Input type="text" name="nomeProduto" id="nomeProduto"
                                placeholder="Atualize o título do seu produto"
                                onChange={AtualizarNomeProduto}
                                value={nomeProduto}
                            />
                        </C.Col>
                        <C.Col lg="4">
                            <C.Label>Selecione a categoria</C.Label>
                            <C.Input type="select" name="categoriaId" id="categoriaId" 
                                onChange={AtualizarCategoriaProduto} value={categoriaProdutoId}>
                                    <option value={categoriaProdutoId}>{categoriaProduto}</option>
                                {categoria.map((dado, index) => (
                                    dado.idCategoria !== categoriaProdutoId ? (
                                        <option value={dado.idCategoria} key={index}>
                                            {dado.nomeCategoria}
                                        </option>
                                    ): ""
                                ))}
                            </C.Input>
                        </C.Col>
                        <C.Col lg="4">
                        <C.Label>Carga horário do produto</C.Label>
                        <C.Input type="number" name="cargaHorariaProduto" id="cargaHorariaProduto"
                            placeholder="Atualize a carga horário do produto"
                            value={cargaHorariaProduto}
                            onChange={AtualizarCargaHoraria}
                        />
                    </C.Col>
                    <C.Col lg="4">
                        <C.Label>Dias da semana do produto</C.Label>
                        <C.Input type="text" name="diasSemanaProduto" id="diasSemanaProduto"
                            placeholder="Atualize os dias da semana do produto"
                            value={diasSemanaProduto}
                            onChange={AtualizarDiaSemana}
                        />
                    </C.Col>
                    <C.Col lg="4">
                        <C.Label>Datas da semana do produto</C.Label>
                        <C.Input type="text" name="dataSemanaProduto" id="dataSemanaProduto"
                            placeholder="Atualize as data da semana do produto"
                            value={dataSemanaProduto}
                            onChange={AtualizarDataSemana}
                        />
                    </C.Col>
                        <C.Col lg="12">
                            <C.Label>Descrição da categoria</C.Label>
                            <C.Input type="textarea" name="descricaoProduto"
                                id="descricaoProduto" 
                                placeholder="Atualize a descrição da categoria"
                                rows="4" onChange={AtualizarDescricaoProduto}
                                value={descricaoProduto}
                            />
                        </C.Col>
                        <C.Col lg="4">
                            <C.Button color="primary" onClick={EnviarDados}>
                                Atualizar produto
                            </C.Button>
                        </C.Col>
                    </C.Row>
                </C.Form>
            </C.Col>
        </C.Row>
    )
}