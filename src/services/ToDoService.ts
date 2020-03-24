import { IToDoService } from "./IToDoService";
import { ToDo } from "../models/ToDo";
import { FilterOptions } from "../models/FilterOptions";
import { Client } from "pg";

export class ToDoService implements IToDoService {

    private pg = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'noteTaker',
        password: 'password',
        port: 5432,
    })

    public async create(toDo: ToDo): Promise<ToDo> {

        if (typeof toDo.id !== 'undefined' && toDo.id !== null) {

            throw new Error('Id cannot be supplied on creation');
        }

        if (typeof toDo.title === 'undefined' || toDo.title === null) {

            throw new Error('Title cannot be blank');
        }

        if (typeof toDo.body !== 'undefined' && toDo.body !== null) {

            let result = null;

            await this.pg.connect();

            await this.pg
            .query('INSERT INTO todos (title, body, createdAt) VALUES ($1, $2, now()) RETURNING *', 
            [toDo.title, toDo.body])
            .then(res => {
                result = res.rows[0];
            });

            return result;
        } 

        let result = null;

            await this.pg.connect();

            await this.pg
            .query('INSERT INTO todos (title, createdAt) VALUES ($1, now()) RETURNING *', 
            [toDo.title])
            .then(res => {
                result = res.rows[0];
            });

            return result;
    }

    public async get(filterOptions?: FilterOptions[]): Promise<Array<ToDo>> {

        throw new Error("Method not implemented.");
    }

    public async update(toDo: ToDo): Promise<ToDo> {

        throw new Error("Method not implemented.");
    }

    public async delete(Id: number): Promise<void> {

        throw new Error("Method not implemented.");
    }


}