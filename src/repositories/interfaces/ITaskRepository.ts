import { IEditTaskDTO } from "@useCases/task/edit/DTO"
import { ICreateTaskDTO } from "src/useCases/task/create/DTO"
import { ResponseDTO } from "src/utils/ResponseDTO"

export interface ITaskRepository {
    get(): Promise<ResponseDTO>
    post(data: ICreateTaskDTO): Promise<ResponseDTO>
    put(data: IEditTaskDTO): Promise<ResponseDTO>
    delete(id: string): Promise<ResponseDTO>
}