import api from "../api";

export const VisualizarCategoria = async () => {
    try{
        const response = await api.get("/categoria");

        return response.data;
    }catch(error){
        return `${error.response.status}`;
    }
}

export const CategoriaSelecionada = async () =>{
    try{
        let id = window.location.pathname.split("/");
        const response = await api.get(`/categoria/${id[2]}`)

        return response.data;
    }catch(error){
        return `${error.response.status}`;
    }
}