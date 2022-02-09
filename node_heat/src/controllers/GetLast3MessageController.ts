import { Request, Response } from 'express';
import { GetLast3MessagesService } from '../services/GetLast3MessagesService';


// O Controller instancia e executa o metodo do service passando seus devidos parametos.

class GetLast3MessageController{
    async handle(request: Request, response: Response){
       const service = new GetLast3MessagesService();       //Instanciando a service

       const result = await service.execute();              //Rodando o metodo principal (EXECUTE)

       return response.json(result);
    }
}

export { GetLast3MessageController }