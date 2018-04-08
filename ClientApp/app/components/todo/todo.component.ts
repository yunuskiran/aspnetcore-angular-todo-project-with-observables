import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../Services/TodoService';
import { TodoModel } from '../../Model/TodoModel';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
 })

 export class TodoComponent implements OnInit { 
    items : TodoModel[];
    message: String;
    item = new TodoModel();   
    constructor(private todoService: TodoService) {
        this.message='';
        this.items=[];
     }

    ngOnInit(): void {
         this.getAll();
    }

    getAll(): void {
      this.todoService.getAll().subscribe( item=>this.items=item,err => this.message = err);    
    }

    AddItem(): void {
      this.todoService.insert(this.item).subscribe( todo => {
                        this.getAll();		
                        this.item.name = todo.name;
                        this.item.name='';                             						   
            },err => this.message = err);

    }

    DeleteItem(selectedRow:TodoModel){
        this.todoService.delete(selectedRow).subscribe( todo => {
            this.getAll();		                           						   
       },err => this.message = err);
    }
 } 