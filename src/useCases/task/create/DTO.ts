export interface ICreateTaskDTO {
    id?: string;
    created_at?: Date;
    updated_at?: Date;
    title: string;
    content: string;
    favorite?: boolean;
    color: string;
}