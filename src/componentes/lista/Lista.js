import { useContext } from "react";
import { Contexto } from "../servicios/Memoria";
import Meta from "./Meta";

function Lista() {
    const [estado] = useContext(Contexto);

    return estado.orden.map((id) => (
        <Meta key={id} {...estado.objetos[id]}></Meta>
    ));
}

export default Lista;
