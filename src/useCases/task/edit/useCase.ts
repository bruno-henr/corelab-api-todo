import { ITaskRepository } from "src/repositories/interfaces/ITaskRepository";
import { ResponseDTO } from "src/utils/ResponseDTO";
import { IEditTaskDTO } from "./DTO";

export class EditTaskUseCase {
    constructor(
        private taskRepository: ITaskRepository
    ) { }

    async execute(data: IEditTaskDTO): Promise<ResponseDTO> {
        try {
            if (!data.id) {
                throw new Error("ID is required.");
            }

            const response = await this.taskRepository.put(data);
            if (response.has_error && response.error === 'Task does not exist') {
                throw new Error("ID not found.");
            }
            return response;
        } catch (error) {
            return new ResponseDTO({}, true, error.message)
        }
    }
}