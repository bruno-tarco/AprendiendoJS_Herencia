export class Cuenta {
    #cliente;
    #saldo; //los atributos públicos se pueden escribir en el constructor
    
    constructor(cliente, numero, agencia, saldo){
        if (this.constructor==Cuenta){  //cuenta solo es extensible, solo heredable
            throw new Error('No se debe instanciar objetos de la clase Cuenta');
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) { 
        //esto es método abstracto, existe , no  hace nada y protege
        throw new Error('Debe implementar el método retirarDeCuenta en su clase');

    }

    _retirarDeCuenta(valor,comision) {
        valor = valor * (1+comision/100);

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
    }

    prueba(){
        console.log("Método padre");
    }
}