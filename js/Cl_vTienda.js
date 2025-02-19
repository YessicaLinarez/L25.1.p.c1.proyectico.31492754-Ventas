import Cl_mVenta from "./Cl_mVenta.js";
import Cl_vVenta from "./Cl_vVenta.js";

export default class Cl_vTienda {
    constructor({montoCaja, porcIncremento}){
        this.montoCaja = montoCaja;
        this.porcIncremento = porcIncremento;
        this.controlador = null;
        this.mVenta = null;
        this.vVenta = new Cl_vVenta();
        this.btAgregar = document.getElementById("btAgregar");
        this.salida = document.getElementById("salida");
        this.btAgregar.onclick = () => this.controlador.agregarVenta();
    }


    agregarVenta(){
        if(this.montoCaja === 0){
        this.montoCaja = +prompt("Ingrese el monto inicial de la caja");
         }
        if(this.porcIncremento === 0){
        this.porcIncremento = +prompt("Ingrese el incremento del costo");

        }

        this.mVenta = new Cl_mVenta({
            cliente: this.vVenta.cliente,
            factura: this.vVenta.factura,
            costo: this.vVenta.costo,
            cnArticulos: this.vVenta.cnArticulos,
        });
        return this.mVenta;
        
        
    }
    reportarVenta(montoFinalCaja, devolverClienteMayorCompra, devolverContCliente){
        this.salida.innerHTML +=`Monto final en caja: ${montoFinalCaja} <br>
        Cliente que pago el monto mayor: ${devolverClienteMayorCompra} <br>
        Cantidad de clientes que solo llevaron 1 articulo: ${devolverContCliente} <br>
        `;
    }


}