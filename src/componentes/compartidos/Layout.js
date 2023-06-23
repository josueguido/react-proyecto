import Encabezado from './Encabezado';
import Pie from './Pie';
import Principal from './Principal';
import Detalles from '../nueva/Detalles';
import Lista from '../lista/Lista';



function Layout() {
  return ( 
    <>
      <Encabezado></Encabezado>
      <Principal>
      <Lista></Lista>
      <Detalles></Detalles>
      </Principal>
      <Pie></Pie>
    </>
  );
}

export default Layout;
