import React, { useContext } from "react";
import Credenciales from "../../compartidos/Credenciales";
import { useNavigate } from "react-router";
import { registrarse } from "../../../servicios/Auth";
import { ContextoAuth } from "../../../memoria/Auth";

function Registro() {

    const navegar = useNavigate();

    const [auth, enviarAuth] = useContext(ContextoAuth);
    const enviar = async (form) => {
        const token = await registrarse(form);
        enviarAuth({ tipo: 'colocar', token: token });
        navegar('/lista');
    };


    return (
        <Credenciales
            enviar={enviar}
            titulo="Registro"
            boton="Registrarme"
        ></Credenciales>
    );
}

export default Registro;
