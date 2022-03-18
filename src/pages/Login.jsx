import React, { Component } from "react";
import api from "../services/api";
class Login extends Component{

  constructor(){
    super();
    this.state = {
      mensagem: "",
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      emailUsuario: this.emailUsuario,
      senhaUsuario: this.senhaUsuario,
    }

    console.log(data);

    api.post("/login", data)
        .then(res => {
            localStorage.setItem("token", res.data);
            console.log(res.data);

            setTimeout(function(){
                window.location.href = "/home";
            }, 1000)
        })
        .catch(error => {
          console.log(error.response.data);
          this.setState({ mensagem: error.response.data });

          setTimeout(function(){
            window.location.href = "/login";
          }, 1000)
        })
  }

  render(){
      return (
        <main className="form-signin">
          {
            this.state.mensagem !== "" ? (
                <div className="alert alert-danger">
                    {this.state.mensagem}
                </div>
            ): ""
          }
          <form onSubmit={this.handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Login</h1>
    
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                name="email_usuario"
                id="email_usuario"
                placeholder="name@example.com"
                onChange={e => this.emailUsuario = e.target.value}
              />
              <label htmlFor="floatingInput">Email:</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                name="senha_usuario"
                id="senha_usuario"
                placeholder="Password"
                onChange={e => this.senhaUsuario = e.target.value}
              />
              <label htmlFor="floatingPassword">Senha</label>
            </div>
    
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Lembrar-me
              </label>
            </div>
            <button type="submit" className="w-100 btn btn-lg btn-primary" type="submit">
              Entrar
            </button>
          </form>
        </main>
      );
    }
  }

export default Login;
