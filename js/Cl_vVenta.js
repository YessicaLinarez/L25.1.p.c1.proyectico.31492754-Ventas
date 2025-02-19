export default class Cl_vVenta {
  constructor(){
    this.vista = document.getElementById("ventaForm");
    this.inCliente = document.getElementById("ventaForm_inCliente");
    this.inFactura = document.getElementById("ventaForm_inFactura");
    this.inCosto = document.getElementById("ventaForm_inCosto");
    this.inCnArticulos = document.getElementById("ventaForm_inCnArticulos");
    this.btAceptar = document.getElementById("ventaForm_btAceptar");
  }

  get cliente(){
    return this.inCliente.value;
  }

  get factura(){
    return +this.inFactura.value;
  }
  get costo(){
    return +this.inCosto.value;
  }
  get cnArticulos(){
    return +this.inCnArticulos.value;

  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }

    
  }