declare namespace Express{      //Biblioteca que quero sobreescrever
    export interface Request{
        user_id: string;
    }
}