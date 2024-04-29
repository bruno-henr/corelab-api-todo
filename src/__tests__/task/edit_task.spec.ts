import { ITaskRepository } from "../../repositories/interfaces/ITaskRepository";
import { describe, expect, test, beforeAll, afterAll, beforeEach, afterEach } from "@jest/globals";
import { CreateTaskUseCase } from "../../useCases/task/create/useCase";
import { InMemoryTaskRepository } from "../../__in_memory__/InMemoryTaskRepository";
import { uuid } from "uuidv4";
import { Task } from "@prisma/client";
import { EditTaskUseCase } from "../../useCases/task/edit/useCase";


describe("Edit Task", () => {
    let taskRepositoryInMemory: ITaskRepository | null;

    let createTaskUseCase: CreateTaskUseCase | null;
    let editTaskUseCase: EditTaskUseCase | null;
    const expectedId = uuid();
    let task: Task = {} as Task;
    beforeEach(async () => {
        taskRepositoryInMemory = new InMemoryTaskRepository();
        createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
        editTaskUseCase = new EditTaskUseCase(taskRepositoryInMemory);

        const result = await createTaskUseCase?.execute({
            id: expectedId,
            title: "Estudar javascript",
            content: "Estudar SOLID",
            color: "#ccc",
            favorite: true
        });
        task = result.data as Task;
    });
    afterEach(() => {
        taskRepositoryInMemory = null;
        createTaskUseCase = null;
    });

    test("should be able edit an task", async () => {
        let payload = { ...task }
        payload.color = "#000";
        payload.title = "Estudar Spring Boot";
        payload.content = "Estudar as Beans";
        payload.favorite = false;
        const result = await editTaskUseCase.execute(payload);
        expect(result.data.id).toBe(expectedId);
        expect(result.has_error).toBeFalsy();
    });

    test("it shouldn't be able edit an task without ID", async () => {
        let payload = { ...task }
        delete payload.id


        expect(async () =>
            await editTaskUseCase.execute(payload)
        ).rejects.toThrow();
    });

    test("should be able edit title an task", async () => {
        let payload = { ...task }
        payload.title = "Estudar Spring Boot";
        
        const result = await editTaskUseCase.execute(payload);
        expect(result.data.title).toBe("Estudar Spring Boot");
        expect(result.has_error).toBeFalsy();
    });

    test("should be able edit color an task", async () => {
        let payload = { ...task }
        payload.color = "#0101";
        
        const result = await editTaskUseCase.execute(payload);
        expect(result.data.color).toBe("#0101");
        expect(result.has_error).toBeFalsy();
    });

    test("should be able edit content an task", async () => {
        let payload = { ...task }
        payload.content = "Estudar estrutura de dados";
        
        const result = await editTaskUseCase.execute(payload);
        expect(result.data.content).toBe("Estudar estrutura de dados");
        expect(result.has_error).toBeFalsy();
    });

    test("should be able edit favorite an task", async () => {
        let payload = { ...task }
        payload.favorite = true;
        
        const result = await editTaskUseCase.execute(payload);
        expect(result.data.favorite).toBe(true);
        expect(result.has_error).toBeFalsy();
    });

    test("it shouldn't be possible to edit a task without a known id", async () => {
        let payload = { ...task }
        payload.id = '5432'
        
        expect(async () =>
            await editTaskUseCase.execute(payload)
        ).rejects.toThrow();
    });
})