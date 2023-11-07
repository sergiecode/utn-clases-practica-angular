export interface IUsuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    dni: string;
    telefono: string;
    tipo_dni: string;
    tipo_id: number;
    fecha_nacimiento: Date | string;
    foto_perfil: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

export interface IUsuarioResponse{
    msg: string;
}
