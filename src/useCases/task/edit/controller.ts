import { ResponseDTO } from "@utils/ResponseDTO";
import { EditTaskUseCase } from "./useCase";
import { Request, Response } from 'express';

export class EditTaskController {
    constructor(
        private editTaskUseCase: EditTaskUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const result = await this.editTaskUseCase.execute(request.body);
            if (result.has_error) return response.status(400).json(result)
            return response.status(200).json(result)
            
        } catch (error) {
            const errorObject = new ResponseDTO({}, true, error.message);
            return response.status(400).json(errorObject)
        }
    }
}