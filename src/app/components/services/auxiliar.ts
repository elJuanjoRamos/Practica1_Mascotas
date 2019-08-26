export class Ayuda {
    usuario: string = "";
    constructor(){
    }

    setUsuario(u: string) {
        this.usuario = u;
    }

    cearUsuario(){
        this.usuario = "";
    }
    getUsuario(){
        return this.usuario;
    }
}
