import { ITaskRepository } from "../../repositories/interfaces/ITaskRepository";
import { describe, expect, test, beforeEach, afterEach } from "@jest/globals";
import { CreateTaskUseCase } from "../../useCases/task/create/useCase";
import { InMemoryTaskRepository } from "../../__in_memory__/InMemoryTaskRepository";
import { v4 } from "uuid";
import { ListTaskUseCase } from "../../useCases/task/list/useCase";


describe("List Task", () => {
    let taskRepositoryInMemory: ITaskRepository | null;

    let createTaskUseCase: CreateTaskUseCase | null;
    let listTaskUseCase: ListTaskUseCase | null;
    const expectedId = v4();

    beforeEach(async () => {
        taskRepositoryInMemory = new InMemoryTaskRepository();
        createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
        listTaskUseCase = new ListTaskUseCase(taskRepositoryInMemory);

        await createTaskUseCase?.execute({
            id: expectedId,
            title: "Estudar javascript",
            content: "Estudar SOLID",
            color: "#ccc",
            favorite: true
        });
    });
    afterEach(() => {
        taskRepositoryInMemory = null;
        createTaskUseCase = null;
    });

    test("should be able list all tasks", async () => {
        const result = await listTaskUseCase.execute();
        expect(result.data.length).toBeGreaterThanOrEqual(1)
        expect(result.has_error).toBeFalsy();
    });


})