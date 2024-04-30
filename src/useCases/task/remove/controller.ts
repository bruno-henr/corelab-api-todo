import { RemoveTaskUseCase } from "./useCase";
import { Request, Response } from 'express';

export class RemoveTaskController {
    constructor(
        private removeTaskUseCase: RemoveTaskUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const result = await this.removeTaskUseCase.execute(request.params.id);
        if (result.has_error) return response.status(400).json(result);
        return response.status(200).json(result);
    }
}