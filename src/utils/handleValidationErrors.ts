import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { ResponseDTO } from './ResponseDTO';

interface ValidationError {
    type: string,
    msg: string,
    path: string,
    location: string
}

const formatValidationErrors = (errors: ValidationError[]) => {
    const formattedErrors = errors.map(error => {
        return {
            type: 'validation',
            message: error.msg,
            field: error.path,
            location: error.location
        };
    });
    return formattedErrors;
};

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    const errors: any = validationResult(req);
    if (!errors.isEmpty()) {
        const formattedErrors = formatValidationErrors(errors.array());
        const responseError = new ResponseDTO({}, true, formattedErrors)
        return res.status(400).json(responseError);
    }
    next();
};