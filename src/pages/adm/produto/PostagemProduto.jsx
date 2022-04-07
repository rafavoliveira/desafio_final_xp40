import * as C from "reactstrap";
import { useState, useEffect, useRef, useMemo } from "react";
import { VisualizarCategoria } from "../../../services/api-rotas/api-rotas-categoria";
import api from "../../../services/api";
import JoditEditor from "jodit-react";


export function PostagemProduto(){

    const editor = useRef(null);

    const config = {
        readonly: false, height: 100,
    }

    const [categorias, setCategorias] = useState([]);
    const [imagemProduto, setImagemProduto] = useState("");
    const [nomeProduto, setNomeProduto] = useState("");
    const [descricaoProduto, setDescricaoProduto] = useState("");
    const [categoriaId, setCategoriaId] = useState("");
    const [cargaHorariaProduto, setCargaHoraria] = useState("");
    const [diasSemanaProduto, setDiaSemana] = useState("");
    const [dataSemanaProduto, setDataSemana] = useState("");
    const [investimentoProduto, setInvestimentoProduto] = useState("");
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
    const EnviarCargaHoraria = (event) => {setCargaHoraria(event.target.value)}
    const EnviarDiasSemana = (event) => {setDiaSemana(event.target.value)}
    const EnviarDataSemana = (event) => {setDataSemana(event.target.value)}
    const EnviarInvestimentoProduto = (event) => {setInvestimentoProduto(event.target.value)}

    const EnviarDados = () => {
        const data = {
            fotoProduto: imagemProduto, nomeProduto: nomeProduto, 
            descricaoProduto: descricaoProduto, cargaHorariaProduto: cargaHorariaProduto,
            diasSemanaProduto: diasSemanaProduto, dataSemanaProduto: dataSemanaProduto,
            investimentoProduto: investimentoProduto, categoriaId: categoriaId
        }
        setDescricaoProduto(localStorage.getItem("document"));
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
                    <C.Col lg="3">
                        <C.Label>Carga horário do produto</C.Label>
                        <C.Input type="number" name="cargaHorariaProduto" id="cargaHorariaProduto"
                            placeholder="Digite a carga horário do produto"
                            onChange={EnviarCargaHoraria}
                        />
                    </C.Col>
                    <C.Col lg="3">
                        <C.Label>Dias da semana do produto</C.Label>
                        <C.Input type="text" name="diasSemanaProduto" id="diasSemanaProduto"
                            placeholder="Digite os dias da semana do produto"
                            onChange={EnviarDiasSemana}
                        />
                    </C.Col>
                    <C.Col lg="3">
                        <C.Label>Datas da semana do produto</C.Label>
                        <C.Input type="txt" name="dataSemanaProduto" id="dataSemanaProduto"
                            placeholder="Digite as data da semana do produto"
                            onChange={EnviarDataSemana}
                        />
                    </C.Col>
                    <C.Col lg="3">
                        <C.Label>Investimento do produto</C.Label>
                        <C.Input type="number" name="investimentoProduto" id="investimentoProduto"
                            placeholder="Digite o investimento do produto"
                            onChange={EnviarInvestimentoProduto}
                        />
                    </C.Col>
                    <C.Col lg="12">
                        <C.Label>Descrição do produto</C.Label>
                        <JoditEditor
                            ref={editor}
                            value={descricaoProduto}
                            config={config}
                            tabIndex={1}
                            onBlur={(newContent) => setDescricaoProduto(newContent)}
                            onChange={(newContent) => {}}
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