import { useState, useEffect } from "react";
import * as C from "reactstrap";

export function AtualizarCategoria(){
    return(
        <C.Row>
            <h2>Atualizar categoria</h2>
            <C.Col lg="12">
                <C.Form>
                    <C.Row>
                        <C.Col lg="6">
                            <C.Label>Imagem da categoria</C.Label>
                            <C.Input type="url" name="fotoCategoria" id="fotoCategoria"
                                placeholder="Atualize a imagem da categoria"
                            />
                        </C.Col>
                        <C.Col lg="6">
                            <C.Label>Título da categoria</C.Label>
                            <C.Input type="text" name="nomeCategoria" id="nomeCategoria"
                                placeholder="Atualize o título da categoria"
                            />
                        </C.Col>
                        <C.Col lg="12">
                            <C.Label>Descrição da categoria</C.Label>
                            <C.Input type="textarea" name="descricaoCategoria"
                                id="descricaoCategoria" rows="4"
                                placeholder="Atualize a descrição da categoria"
                            />
                        </C.Col>
                        <C.Col lg="4">
                            <C.Button color="primary">Atualizar categoria</C.Button>
                        </C.Col>
                    </C.Row>
                </C.Form>
            </C.Col>
        </C.Row>
    )
}