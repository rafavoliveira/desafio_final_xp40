import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <h1>Bem-vindo!</h1>
            <Link to="/" onClick={() => window.location.reload(localStorage.clear())}>
                Sair
            </Link>
        </>
    )
}

export default Home;