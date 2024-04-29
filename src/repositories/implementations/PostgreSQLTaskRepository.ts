import { prisma } from '@database/prisma';
import { ITaskRepository } from "@interfaces/ITaskRepository";
import { ICreateTaskDTO } from '@useCases/task/create/DTO';
import { IEditTaskDTO } from '@useCases/task/edit/DTO';
import { ResponseDTO } from '@utils/ResponseDTO';

export class PostgreSQLTaskRepository implements ITaskRepository {
    async get(): Promise<ResponseDTO> {
        try {
            const response = await prisma.task.findMany();
            return new ResponseDTO(response, false, null);
        } catch (error) {
            console.log('error => ', error)
            return new ResponseDTO({}, true, error);
        }
    }
    async post(data: ICreateTaskDTO): Promise<ResponseDTO> {
        try {
            const response = await prisma.task.create({
                data: {
                    color: data.color,
                    content: data.content,
                    title: data.title,
                    favorite: data.favorite,
                }
            });
            return new ResponseDTO(response, false, null);
        } catch (error) {
            console.log('error => ', error)
            return new ResponseDTO({}, true, error);
        }
    }
    async put(data: IEditTaskDTO): Promise<ResponseDTO> {
        try {
            const response = await prisma.task.update({
                data: {
                    color: data.color,
                    content: data.content,
                    title: data.title,
                    favorite: data.favorite,
                },
                where: {
                    id: data.id
                }
            });
            return new ResponseDTO(response, false, null);
        } catch (error) {
            console.log('error => ', error)
            return new ResponseDTO({}, true, error);
        }
    }
    async delete(id: string): Promise<ResponseDTO> {
        try {
            const response = await prisma.task.delete({
                where: {
                    id: id
                }
            });
            return new ResponseDTO(response, false, null);
        } catch (error) {
            return new ResponseDTO({}, true, error);
        }
    }
}