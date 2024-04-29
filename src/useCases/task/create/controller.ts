import { CreateTaskUseCase } from "./useCase";
import { Request, Response } from 'express';

export class CreateTaskController {
    constructor(
        private createTaskUsecase: CreateTaskUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const result = await this.createTaskUsecase.execute(request.body);
        if (result.has_error) return response.status(400).json(result)
        return response.status(201).json(result)
    }
}