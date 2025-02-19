export default class Cl_mVenta {
    constructor({cliente, factura, costo, cnArticulos}){
        this.cliente = cliente;
        this.factura = factura;
        this.costo = costo;
        this.cnArticulos = cnArticulos;
    }
    set cliente(c){
        this._cliente = c;
    }
    get cliente(){
        return this._cliente;
    }
    set factura(f){
        this._factura = +f;
    }
    get factura(){
        return this._factura;
    }
    set costo(c){
        this._costo = +c;
    }
    get costo(){
        return this._costo;
    }
    set cnArticulos(a){
        this._cnArticulos = +a;
    }
    get cnArticulos(){
        return this._cnArticulos;
    }


}