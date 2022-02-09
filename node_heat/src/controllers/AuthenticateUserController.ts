import { Request, Response } from "express";

import { AuthenticateUserService } from "../services/AuthenticateUserService";

// O Controller instancia e executa o metodo do service passando seus devidos parametos.

class AuthenticateUserController{
    async handle(request: Request, response: Response){

        const { code } = request.body

        const service = new AuthenticateUserService()

        try{
        const result = await service.execute(code)

        return response.json(result)
        }catch(e){
            return response.json(e.message);
        }
    }
}

export { AuthenticateUserController };