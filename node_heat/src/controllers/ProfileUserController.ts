import { Request, Response } from 'express';
import { ProfileUserService } from '../services/ProfileUserService';


// O Controller instancia e executa o metodo do service passando seus devidos parametos.

class ProfileUserController{
    async handle(request: Request, response: Response){
       const service = new ProfileUserService();       //Instanciando a service

        const {user_id} = request;

       const result = await service.execute(user_id);              //Rodando o metodo principal (EXECUTE)

       return response.json(result);
    }
}

export { ProfileUserController }