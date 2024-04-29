import { ITaskRepository } from "src/repositories/interfaces/ITaskRepository";
import { ResponseDTO } from "src/utils/ResponseDTO";

export class ListTaskUseCase {
    constructor(
        private taskRepository: ITaskRepository
    ) { }

    async execute(): Promise<ResponseDTO> {
        return await this.taskRepository.get();
    }
}