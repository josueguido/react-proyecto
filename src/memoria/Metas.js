import React from "react";
import { createContext, useReducer } from "react";

const listaMock = [
    {
        id: 1,
        detalles: "Correr por 30 minutos",
        periodo: "dia",
        eventos: 1,
        icono: "🏃‍♂️",
        meta: 365,
        plazo: "2030/01/01",
        completado: 100,
    },
    {
        id: 2,
        detalles: "Leer un libro",
        periodo: "año",
        eventos: 6,
        icono: "📚",
        meta: 12,
        plazo: "2030/01/01",
        completado: 0,
    },
    {
        id: 3,
        detalles: "Viajar a parques nacionales",
        periodo: "mes",
        eventos: 1,
        icono: "⛰️",
        meta: 60,
        plazo: "2030/01/01",
        completado: 5,
    },
];

const estadoInicial = {
    orden: [],
    objetos: {},
};

function reductor(estado, accion) {
    switch (accion.tipo) {
        case "colocar": {
            const metas = accion.metas;
            const nuevoEstado = {
                orden: metas.map((meta) => meta.id),
                objetos: metas.reduce(
                    (objetos, meta) => ({ ...objetos, [meta.id]: meta }),
                    {},
                ),
            };
            return nuevoEstado;
        }
        case "crear": {
            const id = Math.random(); //accion.meta.id;
            const nuevoEstado = {
                orden: [...estado.orden, id],
                objetos: {
                    ...estado.objetos,
                    [id]: accion.meta,
                },
            };
            return nuevoEstado;
        }
        case "actualizar": {
            const id = accion.meta.id;
            estado.objetos[id] = {
                ...estado.objetos[id],
                ...accion.meta,
            };
            const nuevoEstado = { ...estado };
            return nuevoEstado;
        }
        case "borrar": {
            const id = accion.id;
            const nuevoOrden = estado.orden.filter((item) => item !== id);
            delete estado.objetos[id];
            const nuevoEstado = {
                orden: nuevoOrden,
                objetos: estado.objetos,
            };
            return nuevoEstado;
        }
        default:
            throw new Error();
    }
}



export const ContextoMetas = createContext(null);

function MetasMemoria({ children }) {
    const value = useReducer(reductor, estadoInicial);
    return (
      <ContextoMetas.Provider value={value}>{children}</ContextoMetas.Provider>
    );
  }
  

export default MetasMemoria;
