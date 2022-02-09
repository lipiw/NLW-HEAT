import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

// O Controller instancia e executa o metodo do service passando seus devidos parametos.

class CreateMessageController{
    async handle(request: Request, response: Response){
        const { message } = request.body;
        const { user_id } = request;

        const service = new CreateMessageService();

        const result = await service.execute(message, user_id);

        return response.json(result);
    }
}

export { CreateMessageController }