export default class Cl_vVenta {
    get cliente() {
      return prompt("Ingrese el nombre del cliente");
    }
    get factura() {
      return +prompt("Ingrese el numero de factura");
    }
  
    get costo() {
      return +prompt("Ingrese el costo del producto");
    }
    get cnArticulos() {
      return +prompt("Ingrese la cantidad de articulos");
    }
    
  }