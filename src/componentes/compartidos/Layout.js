import React from "react";
import Encabezado from "./Encabezado";
import Pie from "./Pie";
import { Outlet } from "react-router";
import estilos from "./Layout.module.css";
import Aside from "./Aside";
function Layout({ privado }) {
    return (
        <>
            <Encabezado></Encabezado>
            <main className={estilos.main}>
                {privado && <Aside />}
                <section className={estilos.section}>
                    <Outlet></Outlet>
                </section>
            </main>
            <Pie></Pie>
        </>
    );
}

export default Layout;
