export interface ToDo {

    id?: number;   //the question mark allows us to make this optional, users won't be inputting an id, that will be assigned by the backend
    title: string;
    body?: string;
    isDone: boolean | false;
    createdAt?: Date;
    lastModified?: Date;
    
}