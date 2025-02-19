export default class Cl_mTienda {
    constructor({montoCaja, porcIncremento}){
        this.montoCaja = montoCaja;
        this.porcIncremento = porcIncremento;
        this.acumMontoFinal = 0;
        this.clienteMayorCompra = 0;
        this.clienteMayorCompraNombre = "";
        this.contCliente1 = 0;

    }
    set montoCaja(m){
        this._montoCaja = +m;
    }
    get montoCaja(){
        return this._montoCaja;
    }
    set porcIncremento(p){
        this._porcIncremento = +p;
    }
    get porcIncremento(){
        return this._porcIncremento;
    }
    procesarVenta(v){
        this.acumMontoFinal += v.montoPagar();
        if(v.cnArticulos == 1){
            this.contCliente1++;
        }

        if(v.costo > this.clienteMayorCompra){
            this.clienteMayorCompra = v.costo;
            this.clienteMayorCompraNombre = v.cliente;
        }
        
    }

    incremento(){
        return this.acumMontoFinal * this._porcIncremento;
    }

    montoFinalCaja(){
        return this._montoCaja + this.incremento() + this.acumMontoFinal();
    }

    devolverClienteMayorCompra(){
        return this.clienteMayorCompraNombre;
    }

    devolverContCliente(){
        return this.contCliente1;
    }



}