export class ResponseDTO {
    public data: any
    public has_error: boolean
    public error: string

    constructor(data?: any, has_error?: boolean, error?: any) {
        Object.assign(this, { data, has_error, error })
    }
}
