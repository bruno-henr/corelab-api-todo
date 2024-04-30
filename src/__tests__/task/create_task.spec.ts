import { ITaskRepository } from "../../repositories/interfaces/ITaskRepository";
import { describe, expect, test, beforeAll, afterAll, beforeEach, afterEach } from "@jest/globals";
import { CreateTaskUseCase } from "../../useCases/task/create/useCase";
import { InMemoryTaskRepository } from "../../__in_memory__/InMemoryTaskRepository";
import { v4 } from 'uuid';


describe("Create Task", () => {
    let taskRepositoryInMemory: ITaskRepository | null;

    let createTaskUseCase: CreateTaskUseCase | null;

    beforeEach(() => {
        taskRepositoryInMemory = new InMemoryTaskRepository();
        createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
    });
    afterEach(() => {
        taskRepositoryInMemory = null;
        createTaskUseCase = null;
    });

    test("should be able create an task", async () => {
        const expectedId = v4();
        let task = {
            id: expectedId,
            title: "Estudar javascript",
            content: "Estudar SOLID",
            color: "#ccc",
            favorite: true
        }
        const result = await createTaskUseCase?.execute(task)
        expect(result.data.id).toBe(expectedId);
        expect(result.has_error).toBeFalsy();
    });

    test("should be able create an task not favorite", async () => {
        const expectedId = v4();
        let task = {
            id: expectedId,
            title: "Estudar javascript",
            content: "Estudar SOLID",
            color: "#ccc"
        }
        const result = await createTaskUseCase?.execute(task)
        expect(result.data.id).toBe(expectedId);
        expect(result.has_error).toBeFalsy();
    })

    test("it shouldn't be able create an task without title", async () => {
        const expectedId = v4();
        let task = {
            id: expectedId,
            title: "",
            content: "Estudar SOLID",
            color: "#ccc"
        }
        expect(async () => {
            await createTaskUseCase?.execute(task)
        }).rejects.toThrow();
    })

    test("it shouldn't be able create an task without content", async () => {
        const expectedId = v4();
        let task = {
            id: expectedId,
            title: "Estudar javascript",
            content: "",
            color: "#ccc"
        }
        expect(async () => {
            await createTaskUseCase?.execute(task)
        }).rejects.toThrow();
    })

    test("it shouldn't be able create an task without color", async () => {
        const expectedId = v4();
        let task = {
            id: expectedId,
            title: "Estudar javascript",
            content: "Estudar SOLID",
            color: ""
        }
        expect(async () => {
            await createTaskUseCase?.execute(task)
        }).rejects.toThrow();
    })
})