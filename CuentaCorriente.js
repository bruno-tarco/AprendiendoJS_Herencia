import {Cliente} from "./Cliente.js";
import {Cuenta} from "./Cuenta.js";

export class CuentaCorriente extends Cuenta{   //estos significa: exporte la clase CuentaCorriente que extiende de Cuenta
   /* #cliente;
    numero;
    agencia;
    #saldo;*/
    static cantidadCuentas = 0;

   /* set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }*/ // estoy pasando las notas al archivo Cuenta.js

    constructor(cliente, numero, agencia) {
        super(cliente,numero,agencia,0);
        /*this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;*/
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {

        super.retirarDeCuenta(valor,5);
    }
    


  /*  depositoEnCuenta(valor) {
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