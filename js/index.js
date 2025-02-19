import Cl_vTienda from "./Cl_vTienda.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_index {
 constructor() {
    let montoCaja = 0;
    let porcIncremento = 0;
    let vista = new Cl_vTienda({montoCaja, porcIncremento});
    let modelo = new Cl_mTienda(vista.montoCaja, vista.porcIncremento);
    let controlador = new Cl_controlador(modelo, vista);
    vista.controlador = controlador;
 }

}