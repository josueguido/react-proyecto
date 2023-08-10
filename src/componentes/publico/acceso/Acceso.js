import React, { useContext } from "react";
import Credenciales from "../../compartidos/Credenciales";
import { ContextoAuth } from "../../../memoria/Auth";
import { useNavigate } from "react-router";
import { acceder } from "../../../servicios/Auth";
function Acceso() {

    const navegar = useNavigate();

    const [auth, enviarAuth] = useContext(ContextoAuth);
    const enviar = async (form) => {
        const token = await acceder(form);
        enviarAuth({ tipo: 'colocar', token: token });
        navegar('/lista');
    };

    return (
        <Credenciales
            enviar={enviar}
            titulo="Acceso"
            boton="Acceder"
        ></Credenciales>
    );
}

export default Acceso;
