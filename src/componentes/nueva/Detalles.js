import React, { useContext, useEffect, useState } from "react";
import estilos from "./Detalles.module.css";
import { Contexto } from "../servicios/Memoria";
import { useNavigate, useParams } from "react-router";
import { actualizarMeta, borrarMeta, crearMeta } from "../servicios/Pedidos";

function Detalles() {
    const { id } = useParams();

    const [form, setForm] = useState({
        detalles: "",
        eventos: 1,
        periodo: "semana",
        icono: "🏃",
        meta: 52,
        plazos: "2030-1-01",
        completado: 0,
    });

    const [enviar] = useContext(Contexto);

    const { detalles, eventos, periodo, icono, meta, plazos, completado } =
        form;

    const onChange = (event, prop) => {
        setForm((estado) => ({ ...estado, [prop]: event.target.value }));
    };

    const navegar = useNavigate();

    useEffect(() => {
        console.log(form);
    }, [form]);

    const crear = async () => {
        const nuevaMeta = await crearMeta(form);
        enviar({ tipo: "crear", meta: nuevaMeta });
        navegar("/Lista");
    };

    const actualizar = async () => {
        const metaActualizada = await actualizarMeta();
        enviar({ tipo: "actualizar", meta: metaActualizada });
        navegar("/lista");
    };
    const borrar = async () => {
        await borrarMeta(form.id);
        enviar({ tipo: "borrar", id: form.id });
        navegar("/lista");
    };

    const cancelar = () => {
        navegar("/lista");
    };

    const frecuencias = ["dia", "semana", "mes", "año"];
    const iconos = ["💻", "📚", "🏃", "✈️", "💵"];
    return (
        <div className="rounded-xl m-4  text-gray-700 text-xs mx-4 nm-flat-white overflow-hidden">
            <form className="padding: 1rem">
                <label className=" block uppercase text-xs font-bold mb-6">
                    Describe tu meta
                    <input
                        className="nm-inset-gray-100 w-full border rounded-xl"
                        placeholder="ej. 52 caminatas"
                        value={detalles}
                        onChange={(e) => onChange(e, "detalles")}
                    />
                </label>
                <label className=" block uppercase text-xs font-bold mb-6">
                    ¿Con que frecuencia deseas cumplir tu meta?{" "}
                    <span>(ej. 1 vez a la semana)</span>
                    <div className="flex  margin-bottom: 1.5rem">
                        <input
                            type="number"
                            className="nm-inset-gray-100 w-full border rounded-xl"
                            value={eventos}
                            onChange={(e) => onChange(e, "eventos")}
                        />
                        <select
                            className="nm-inset-gray-100 w-full border rounded-xl"
                            value={periodo}
                            onChange={(e) => onChange(e, "periodo")}
                        >
                            {frecuencias.map((option) => (
                                <option key={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </label>
                <label className=" block uppercase text-xs font-bold mb-6">
                    ¿Cuantas veces deseas completar esta meta?
                    <input
                        type="number"
                        className="nm-inset-gray-100 w-full border rounded-xl"
                        value={meta}
                        onChange={(e) => onChange(e, "meta")}
                    />
                </label>
                <label className=" block uppercase text-xs font-bold mb-6">
                    ¿Tienes una fecha limite?
                    <input
                        type="number"
                        className="nm-inset-gray-100 w-full border rounded-xl"
                        value={plazos}
                        onChange={(e) => onChange(e, "plazos")}
                    />
                </label>
                <label className=" block uppercase text-xs font-bold mb-6">
                    ¿Cuantas veces haz completado ya esta meta?
                    <input
                        type="number"
                        className="nm-inset-gray-100 w-full border rounded-xl"
                        value={completado}
                        onChange={(e) => onChange(e, "completado")}
                    />
                </label>
                <label className=" block uppercase text-xs font-bold mb-6">
                    Escoge el icono para la meta
                    <select
                        className="nm-inset-gray-100 w-full border rounded-xl"
                        value={icono}
                        onChange={(e) => onChange(e, "icono")}
                    >
                        {iconos.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                {!id && (
                    <button className="boton boton--negro" onClick={crear}>
                        Crear
                    </button>
                )}
                {id && (
                    <button className="boton boton--negro" onClick={actualizar}>
                        Actualizar
                    </button>
                )}
                {id && (
                    <button className="boton boton--rojo" onClick={borrar}>
                        Borrar
                    </button>
                )}
                <button className="boton boton--gris" onClick={cancelar}>
                    Cancelar
                </button>
            </div>
        </div>
    );
}

export default Detalles;
