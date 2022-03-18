import Rotas from "./Rotas";
import React, { Component } from "react";
import api from "./services/api";
class App extends Component{

  state = {
      usuario: "",
  }

  componentDidMount = () => {
      const config = {
          headers:{
              Authorization: `Bearer ` + localStorage.getItem("token")
          }
      }

      api.get("/usuario-logado", config)
          .then(res => {
                console.log(res.data);
          })
          .catch(error => {
                console.log(error);
          })
  }

  render(){
    return(
      <>
        <Rotas/>
      </>
    )
  }
}

export default App;
