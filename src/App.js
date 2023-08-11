import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./App.css";
import Layout from "./componentes/compartidos/Layout";
import Lista from "./componentes/privado/lista/Lista";
import Detalles from "./componentes/privado/nueva/Detalles";
import NoEncontrado from "./componentes/compartidos/NoEncontrado";
import Modal from "./componentes/compartidos/Modal";
import Registro from "./componentes/publico/registro/Registro";
import Acceso from "./componentes/publico/acceso/Acceso";
import { Autenticar } from "./componentes/compartidos/Autenticar";
import { ContextoMetas } from "./memoria/Metas";
import { pedirMetas } from "./servicios/Metas";
function App() {
    const  [, enviar] = useContext(ContextoMetas);

    useEffect( () => {
        (async function () {
          const metas = await pedirMetas();
          enviar({ tipo: "colocar", metas });
        })();
      }, [enviar]);

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/lista" />} />
            <Route element={<Layout />}>
                <Route path="/acceso" element={<Acceso />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="*" element={<NoEncontrado />} />
            </Route>
            <Route element={<Layout privado />}>
                <Route element={<Autenticar />}>
                    <Route path="/lista" element={<Lista />}>
                        <Route
                            path="/lista/:id"
                            element={
                                <Modal>
                                    <Detalles />
                                </Modal>
                            }
                        />
                    </Route>
                    <Route path="/nueva" element={<Detalles />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
