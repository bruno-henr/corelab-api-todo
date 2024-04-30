import { ITaskRepository } from "src/repositories/interfaces/ITaskRepository";
import { ResponseDTO } from "src/utils/ResponseDTO";

export class RemoveTaskUseCase {
    constructor(
        private taskRepository: ITaskRepository
    ) { }

    async execute(id: string): Promise<ResponseDTO> {
        return await this.taskRepository.delete(id);
    }
}