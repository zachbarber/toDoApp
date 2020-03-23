import { ToDo } from "../models/ToDo";
import { FilterOptions } from "../models/FilterOptions";

export interface ToDoService {

    create(toDo: Array<ToDo>): Promise<Array<ToDo>>;
    get(filterOptions?: Array<FilterOptions>): Promise<Array<ToDo>>;
    update(toDo: ToDo): Promise<ToDo>;
    delete(Id: number): Promise<void>; 

}