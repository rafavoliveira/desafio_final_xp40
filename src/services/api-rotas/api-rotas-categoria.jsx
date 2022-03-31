import api from "../api";

export const VisualizarCategoria = async () => {
    try{
        const response = await api.get("/categoria");

        return response.data;
    }catch(error){
        return `${error.response.status}`;
    }
}