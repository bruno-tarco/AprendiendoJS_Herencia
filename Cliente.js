export class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
    //autentificable;  <<<< esto aun  funcionaría debido al prototipado de  pato hecho en index
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave='';
    }

    
    asignarClave(clave){
        this.#clave = clave;
    }

    autenticable(clave){
        return true; //suponiendo que mis clientes estarán autentificados
    }
}