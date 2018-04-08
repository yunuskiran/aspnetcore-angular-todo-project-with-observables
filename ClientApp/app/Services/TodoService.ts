import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {TodoModel} from '../Model/TodoModel';

@Injectable()
export class TodoService {
    header = new Headers({ 'Content-Type': 'application/json' });
    requestOption = new RequestOptions({ headers: this.header });
    
    constructor(private http:Http) { 

    }

    getAll(): Observable<TodoModel[]> {
        return this.http.get('api/todo/GetAll').map(this.map).catch(this.errorFunction);
    }

    insert(model:TodoModel): Observable<TodoModel> {
        return this.http.post('api/todo/Insert',model, this.requestOption).map(this.map).catch(this.errorFunction);
    }

    delete(model:TodoModel): Observable<TodoModel> {
        return this.http.post('api/todo/Delete',model, this.requestOption).do(this.successDeleteResponse).catch(this.errorFunction)
    }

    private successDeleteResponse(){
        alert("success");
    }

    private map(res: Response) {
	    return res.json();
    }

    private errorFunction (err: any) {
	console.error(err);
	return Observable.throw(err);
    }
} 