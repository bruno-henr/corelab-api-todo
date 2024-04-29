import { ListTaskUseCase } from "./useCase";
import { Request, Response } from 'express';

export class ListTaskController {
    constructor(
        private listTaskUseCase: ListTaskUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const result = await this.listTaskUseCase.execute();
        if (result.has_error) return response.status(400).json(result)
        return response.status(200).json(result)
    }
}