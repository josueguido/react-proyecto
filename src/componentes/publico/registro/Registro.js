import React from "react";
import Credenciales from "../../compartidos/Credenciales";

function Registro() {
    const enviar = async (form) => {
        const token = await registrarse(form);
        enviarAuth({ tipo: "colocar", token });
        navegar("/lista");
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
