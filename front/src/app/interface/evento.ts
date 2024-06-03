
export interface Evento {
    id:             number | null;
    nombre:         string;
    descripcion:    string;
    fecha:          string;
    hora:           string;
    fotoCartel:     string;
    mg:             number;
    visibilidad:    boolean;
    numAsistentes:  number;    
    tipo: string;
    createdAt?:     string;
    updatedAt?:     string;
}