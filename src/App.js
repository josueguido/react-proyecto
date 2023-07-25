import { Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./App.css";
import Layout from "./componentes/compartidos/Layout";
import Lista from "./componentes/lista/Lista";
import Detalles from "./componentes/nueva/Detalles";
import NoEncontrado from "./componentes/compartidos/NoEncontrado";
import Modal from "./componentes/compartidos/Modal";

function App() {
    //const  [, despachar] = useContext(Contexto);

    //useEffect(() => {
    //const metas = pedirMetas();
    //enviar({ tipo: 'colocar', metas });

    //}, [enviar]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Lista />} />
                <Route path="lista" element={<Lista />}>
                    <Route
                        path=":id"
                        element={
                            <Modal>
                                <Detalles />
                            </Modal>
                        }
                    />
                </Route>
                <Route path="nueva" element={<Detalles />} />
            </Route>
            <Route path="*" element={<NoEncontrado />} />
        </Routes>
    );
}

export default App;
