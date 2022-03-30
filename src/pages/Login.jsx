import { useState } from "react";
import api from "../services/api";
import * as C from "../styles/GlobalStyle";

function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const EnviarDadosEmail = (event) =>{
        setEmail(event.target.value);
    }

    const EnviarDadosSenha = (event) => {
        setSenha(event.target.value);
    }

    const EnviarDados = (event) => {
        const data = { emailUsuario: email, senhaUsuario: senha,}

        api.post("/login", data)
            .then(res => {
                localStorage.setItem("token", res.data);
                setTimeout(function(){
                    window.location.href = "/home";
                }, 1000)
            })
            .catch(error => {
                setMensagem(error.response.data);
            })

    }

    return(
          <C.LoginPagina>
              <C.RegistroFormulario>
                  {mensagem !== "" ? (
                      <div className="alert alert-danger text-center">
                          {mensagem} <i className="fa fa-warning"></i>
                      </div>
                  ): ""}
                  <C.Formulario>
                      <C.InputFormulario 
                          type="email" placeholder="Digite seu email" 
                          id="emailUsuario" name="emailUsuario" onChange={EnviarDadosEmail}
                      />
                      <C.InputFormulario 
                          type="password" placeholder="Digite sua senha" 
                          id="senhaUsuario" name="senhaUsuario" onChange={EnviarDadosSenha}
                      />
                      <C.BotaoFormulario type="submit" onClick={EnviarDados}>
                          Entrar
                      </C.BotaoFormulario>
                  </C.Formulario>
              </C.RegistroFormulario>
          </C.LoginPagina>
    )
}

export default Login;