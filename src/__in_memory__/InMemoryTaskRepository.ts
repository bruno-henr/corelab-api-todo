import { ITaskRepository } from "../repositories/interfaces/ITaskRepository";
import { Task } from "@prisma/client";
import { ICreateTaskDTO } from "../useCases/task/create/DTO";
import { ResponseDTO } from "../utils/ResponseDTO";
import { IEditTaskDTO } from "../useCases/task/edit/DTO";

export class InMemoryTaskRepository implements ITaskRepository {

    private tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    async get(): Promise<ResponseDTO> {
        const all_taks = this.tasks;
        return new ResponseDTO(all_taks, false, null);
    }
    async post(data: ICreateTaskDTO): Promise<ResponseDTO> {
        data.created_at = new Date();
        data.updated_at = new Date();
        this.tasks.push(data as Task);
        return new ResponseDTO(data, false, null);
    }
    async put(data: IEditTaskDTO): Promise<ResponseDTO> {
        const task = this.tasks.find((t) => t.id == data.id);
        if (!task) {
            return new ResponseDTO(null, true, 'Task does not exist');
        }
        task.updated_at = new Date();
        Object.assign(task, data);
        return new ResponseDTO(task, false, null)
    }
    delete(id: string): Promise<ResponseDTO> {
        throw new Error("Method not implemented.");
    }

}