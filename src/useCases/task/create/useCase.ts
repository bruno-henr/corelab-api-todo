import { ITaskRepository } from "src/repositories/interfaces/ITaskRepository";
import { ResponseDTO } from "../../../utils/ResponseDTO";
import { ICreateTaskDTO } from "./DTO";

export class CreateTaskUseCase {
    constructor(
        private taskRepository: ITaskRepository
    ) { }

    async execute(data: ICreateTaskDTO): Promise<ResponseDTO> {
        if (data.favorite === null || data.favorite === undefined) {
            data.favorite = false;
        }
        if (!data.title) {
            throw new Error("Title is required.");
        }
        if (!data.content) {
            throw new Error("Content is required.");
        }
        if (!data.color) {
            throw new Error("Color is required.");
        }
        return await this.taskRepository.post(data);
    }
}