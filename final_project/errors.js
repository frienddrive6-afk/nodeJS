
export class ValidationError extends Error
{
    constructor(mes)
    {
        super(mes);
        this.name = "ValidationError";
    }
}

export class NotFoundError extends Error 
{
    constructor(mes) 
    {
        super(mes);
        this.name = "NotFoundError";
    }
}