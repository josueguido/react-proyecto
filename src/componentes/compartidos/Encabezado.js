import estilos from "./Encabezado.module.css";
import { ReactComponent as LogoSVG } from "../../img/logo.svg";
import { ReactComponent as PerfilSVG } from "../../img/perfil.svg";
import Vinculo from "./Vinculo";

function Encabezado() {
    return (
        <header className={estilos.ecabezado}>
            <div className={estilos.contenedor}>
                <LogoSVG className={estilos.logo} />
                <a className={estilos.titulo} href="/">
                    Metas App
                </a>
            </div>
            <nav>
                <Vinculo to="/perfil" Icono={PerfilSVG} />
            </nav>
        </header>
    );
}

export default Encabezado;
