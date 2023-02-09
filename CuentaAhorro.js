import {Cuenta} from "./Cuenta.js";

export class CuentaAhorro extends Cuenta{
   /* #cliente;
    #saldo; //los atributos públicos se pueden escribir en el constructor
    */
    constructor(cliente, numero, agencia, saldo){
        super(cliente, numero, agencia, saldo);
    }/*
    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }*/

    
}