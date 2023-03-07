export class CreateUserDto {
    username: string;
    email: string;
    password: string;
    cedula!:string;
    direccion!:string
    estado!:boolean

    constructor(username: string, email:string, password: string,cedula:string,direccion:string,estado:boolean) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.cedula = cedula;
		this.direccion = direccion;
		this.estado = estado;
    }
}
