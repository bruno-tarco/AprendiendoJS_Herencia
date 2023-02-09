export class SistemaAutenticacion{
   
   
    static login(usuario,clave){

        return usuario.clave == clave; // comprueba la autenticación de cualquiér método que tenga el atributo clave
        
       
    }
}