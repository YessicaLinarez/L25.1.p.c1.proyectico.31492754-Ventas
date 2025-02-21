export default class Cl_controlador {
    constructor(modelo, vista){
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarVenta1(){
        this.modelo.procesarVenta(this.vista.agregarVenta());
        this.vista.reportarVenta(this.modelo.montoFinalCaja(), 
        this.modelo.devolverClienteMayorCompra(), 
        this.modelo.devolverContCliente()
    );

    }
    agregarTienda({montoCaja, porcIncremento}){
        this.modelo.montoCaja = montoCaja;
        this.modelo.porcIncremento = porcIncremento;
    }


    

}