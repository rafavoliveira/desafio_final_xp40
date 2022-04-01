import api from "../api";

export const UsuarioLogado = async () => {
    try{
        const response = await api.get("/usuario-logado");

        return response.data;
    }catch(error){

        return `${error.response.status}`;
    }
}

export const VisualizarUsuario = async () => {
    try{
        const response = await api.get("/usuario");

        return response.data;
    }catch(error){
        return `${error.response.status}`;
    }
}

export const UsuarioSelecionado = async () => {
    try{
        let id = window.location.pathname.split("/");
        const response = await api.get(`/usuario/${id[2]}`);

        return response.data;
    }catch(error){
        return `${error.response}`;
    }
}