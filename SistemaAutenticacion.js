export class SistemaAutenticacion{
    static login(usuario,clave){
        if ("autenticable" in usuario && usuario.autenticable instanceof Function)
        //de esta forma se protege si en caso autenticable es una funcion
            return usuario.autenticable(clave);        
        else
            return false
    }
}