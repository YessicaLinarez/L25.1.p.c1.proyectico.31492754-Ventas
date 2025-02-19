export default class Cl_controlador {
    constructor(modelo, vista){
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarVenta(){
        this.modelo.procesarVenta(this.vista.agregarVenta());
        this.vista.reportarVenta(this.modelo.montoFinalCaja(), 
        this.modelo.devolverClienteMayorCompra(), 
        this.modelo.devolverContCliente()
    );

    }
    agregarVenta({montoCaja, porcIncremento}){
        this.mVenta.montoCaja = montoCaja;
        this.mVenta.porcIncremento = porcIncremento;
    }


    

}