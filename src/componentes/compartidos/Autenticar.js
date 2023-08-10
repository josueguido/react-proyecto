import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { ContextoAuth } from "../../memoria/Auth";

export function Autenticar() {
    const [auth] = useContext(ContextoAuth);

    if (!auth.autenticado) {
        return <Navigate to="/acceso" />;
    }

    return <Outlet></Outlet>;
}
