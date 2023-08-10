import React, { ChangeEvent, useState } from "react";
import estilos from "./Credenciales.module.css";

interface CredencialesProps {
    enviar: Function;
    titulo: string;
    boton: string;
}

function Credenciales({ enviar, titulo, boton }: CredencialesProps) {
    const [form, setForm] = useState({
        usuario: "",
        clave: "",
    });

    const { usuario, clave } = form;

    const onChange = (event: ChangeEvent, prop: string) => {
        const value = (event.target as HTMLInputElement).value;
        setForm((estado) => ({ ...estado, [prop]: value }));
    };

    const enAcceder = async (
        evento: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        evento.preventDefault();
        enviar(form);
    };

    return (
        <div className={"tarjeta " + estilos.auth}>
            <h1 className={estilos.head}>{titulo}</h1>
            <form className="p-4">
                <label className="label">
                    usuario
                    <input
                        className="input"
                        placeholder="Escribe tu email"
                        value={usuario}
                        onChange={(e) => onChange(e, "usuario")}
                    />
                </label>
                <label className="label">
                    Clave
                    <input
                        className="input"
                        placeholder="Escribe tu clave"
                        value={clave}
                        onChange={(e) => onChange(e, "clave")}
                    />
                </label>
            </form>
            <div className="botones">
                <button
                    className="boton boton--negro"
                    onClick={(e) => enAcceder(e)}
                >
                    {boton}
                </button>
            </div>
        </div>
    );
}

export default Credenciales;
