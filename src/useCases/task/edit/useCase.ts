import { ITaskRepository } from "src/repositories/interfaces/ITaskRepository";
import { ResponseDTO } from "../../../utils/ResponseDTO";
import { IEditTaskDTO } from "./DTO";

export class EditTaskUseCase {
    constructor(
        private taskRepository: ITaskRepository
    ) { }

    async execute(data: IEditTaskDTO): Promise<ResponseDTO> {

        if (!data.id) {
            throw new Error("ID is required.");
        }

        const response = await this.taskRepository.put(data);
        if (response.has_error && response.error === 'Task does not exist') {
            throw new Error("ID not found.");
        }
        return response;

    }
}