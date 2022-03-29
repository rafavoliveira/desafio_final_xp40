import api from "../api";

export const UsuarioLogado = async () => {
    try{
        const response = await api.get("/usuario-logado")

        return response.data;
    }catch(error){

        return `${error.response.status}`
    }
}