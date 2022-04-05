import NotFoundImage from "../assets/home/not-found.png";
import styled from "styled-components";

const Container = styled.div`
    align-items: center; display: flex;
    justify-content: center;
`;

export const NotFound = () => {

    setTimeout(function(){
        window.location.href = "/";
    },5000)

    return(
        <Container>
            <img src={NotFoundImage}/>
            <h2 className="text-center">Erro 404 - Você será redirecionado para outra página!</h2>
        </Container>
    )
}