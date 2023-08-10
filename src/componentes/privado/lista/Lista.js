import React from "react";
import { useContext } from "react";
import { ContextoMetas } from "../../../memoria/Metas";
import Meta from "./Meta";

function Lista() {
    const [metas] = useContext(ContextoMetas);

    return metas.orden.map((id) => (
        <Meta key={id} {...metas.objetos[id]}></Meta>
    ));
}

export default Lista;
