import Cl_mVenta from "./Cl_mVenta.js";
import Cl_vVenta from "./Cl_vVenta.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vTienda {
    constructor({montoCaja, porcIncremento,controlador}){
        this.montoCaja = document.getElementById("mainForm_inMontoCaja"); 
        this.porcIncremento =document.getElementById("mainForm_inPorcIncremento");


        this.controlador = new Cl_controlador();
        this.mVenta = null;
        this.vVenta = new Cl_vVenta();
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblMontoFinalCaja = document.getElementById("mainForm_lblMontoFinalCaja");
        this.lblDevolverClienteMayorCompra = document.getElementById("mainForm_lblDevolverClienteMayorCompra");
        this.lblDevolverContCliente = document.getElementById("mainForm_lblDevolverContCliente");
        this.btAgregar.onclick = () => this.ocultar();
        this.vVenta.btAceptar.onclick = () => this.controlador.agregarVenta1();
        this.mostrar();
        this.btAceptar = document.getElementById("mainForm_btAceptar");

        this.btAceptar.onclick = () =>
            this.controlador.agregarTienda({
              montoCaja: this.montoCaja.value,
              porcIncremento: this.porcIncremento.value,
            });
    
          
        
        
    
    }


    agregarVenta(){

        this.mVenta = new Cl_mVenta({
            cliente: this.vVenta.cliente,
            factura: this.vVenta.factura,
            costo: this.vVenta.costo,
            cnArticulos: this.vVenta.cnArticulos,
        });
        this.mostrar();
        return this.mVenta;
    }

    mostrar() {
        this.vista.hidden = false;
        this.vVenta.ocultar();
    }
      ocultar() {
        this.vista.hidden = true;
        this.vVenta.mostrar();
    }

    reportarVenta(montoFinalCaja, devolverClienteMayorCompra, devolverContCliente){
        this.tabla.innerHTML +=`
        <tr>
         <td>${this.mVenta.cliente}</td>
         <td>${this.mVenta.factura}</td>
         <td>${this.mVenta.costo}</td>
         <td>${this.mVenta.cnArticulos}</td>
        </tr>`;
         this.lblMontoFinalCaja.innerHTML = montoFinalCaja;
         this.lblDevolverClienteMayorCompra.innerHTML = devolverClienteMayorCompra;
         this.lblDevolverContCliente.innerHTML = devolverContCliente;
        
    }


}