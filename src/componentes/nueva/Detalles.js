import { useContext, useEffect, useState } from "react";
import estilos from "./Detalles.module.css";
import { Contexto } from "../servicios/Memoria";


function Detalles() {
    const [form, setForm] = useState({
    detalles: '',
    eventos: 1,
    periodo: 'semana',
    icono: '🏃',
    meta: 52,
    plazos: '2030-00-01',
    completado: 0
});

const [estado, enviar] = useContext(Contexto);


   const { detalles, eventos, periodo, icono, meta, plazos, completado } = form;

   const onChange = (event, prop) => {
       setForm(estado => ({...estado, [prop]: event.target.value}));
   }

   useEffect (() => {
     console.log(form);
   }, [form])


const crear = async () => {
    //console.log(form)
    enviar({ tipo: 'crear', meta })
;}


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
                     onChange={e => onChange(e, 'detalles')}
                     />
                </label>
                <label className=" block uppercase text-xs font-bold mb-6">
                ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                <div className="flex  margin-bottom: 1.5rem">
                    <input type="number"
                    className="nm-inset-gray-100 w-full border rounded-xl"  
                    value={eventos}
                    onChange={e => onChange(e, 'eventos')}
                    />
                    <select 
                    className="nm-inset-gray-100 w-full border rounded-xl" 
                    value={periodo}
                    onChange={e => onChange(e, 'periodo')}

                    >
                        {frecuencias.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </div>
                </label>
                <label className=" block uppercase text-xs font-bold mb-6">
                ¿Cuantas veces deseas completar esta meta? 
                <input 
                className="nm-inset-gray-100 w-full border rounded-xl"
                type="number"
                value={meta}   
                onChange={e => onChange(e, 'meta')}

                />
                </label>
                <label className=" block uppercase text-xs font-bold mb-6">
                ¿Tienes una fecha limite?
                <input 
                type="number" 
                className="nm-inset-gray-100 w-full border rounded-xl"
                value={plazos}
                onChange={e => onChange(e, 'plazos')}

                />
                </label>
                <label className=" block uppercase text-xs font-bold mb-6">
                ¿Cuantas veces haz completado ya esta meta?
                <input 
                className="nm-inset-gray-100 w-full border rounded-xl" 
                type="number"
                value={completado}
                onChange={e => onChange(e, 'completado')}
                />
                </label>
                <label className=" block uppercase text-xs font-bold mb-6">
                    Escoge el icono para la meta
                    <select 
                    className="nm-inset-gray-100 w-full border rounded-xl"
                    value={icono}
                onChange={e => onChange(e, 'icono')}
                    >
                        {iconos.map(option => <option value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                <button 
                className="boton boton--negro"
                onClick={crear}
                >Crear</button>
                <button className="boton boton--gris">Cancelar</button>
            </div>
        </div>
     );
}

export default Detalles;