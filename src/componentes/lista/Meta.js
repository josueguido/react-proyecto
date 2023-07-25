import estilos from "./Meta.module.css";

function Meta({ icono, eventos, periodo, detalles, meta, completado }) {
    return (
        <div className={`${estilos.meta} tarjeta`}>
            <div className="flex items-center">
                <div className={estilos.icono}>{icono}</div>
                <div>
                    <p className="text-xl ml-5 mr-10">
                        {eventos}
                        <sub className="text-gray-500">/ {periodo}</sub>
                    </p>
                    <p>{detalles}</p>
                </div>
            </div>
            <div className="flex">
                <div className="relative m-2 mx-5">
                    <p className="text-center">
                        {completado} de {meta}
                    </p>
                    <div className={estilos.barra1}>
                        <div
                            style={{
                                width: `${Math.round(
                                    (completado / meta) * 100,
                                )}%`,
                            }}
                            className={estilos.barra2}
                        ></div>
                    </div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
            <div className={estilos.botones}>
                <button className="boton boton--gris">Completado</button>
            </div>
        </div>
    );
}

export default Meta;
