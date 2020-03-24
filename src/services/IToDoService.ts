import { ToDo } from "../models/ToDo";
import { FilterOptions } from "../models/FilterOptions";

export interface IToDoService {

    create(toDo: ToDo): Promise<ToDo>;
    get(filterOptions?: Array<FilterOptions>): Promise<Array<ToDo>>;
    update(toDo: ToDo): Promise<ToDo>;
    delete(Id: number): Promise<void>; 

}