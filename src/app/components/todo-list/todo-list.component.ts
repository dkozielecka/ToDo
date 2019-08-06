import {
    Component,
    OnInit
} from '@angular/core';

import { Todo } from '../../interfaces/todo';

@Component( {
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: [ './todo-list.component.scss' ]
} )

export class TodoListComponent implements OnInit {
    todos: Todo[];
    title: string;
    prevTitle: string;
    id: number;

    constructor() {
        this.id = 1;
        this.title = '';
        this.prevTitle = '';
        this.todos = [
            {
                id: 0,
                title: 'example',
                editing: false,
                completed: false
            },
            {
                id: this.id,
                title: 'dups',
                editing: false,
                completed: false
            }
        ];
    }

    ngOnInit(): void {
    }

    private addTodo(): void {
        if ( !this.title.trim() ) {
            return;
        }
        this.todos.push( {
            id: this.id,
            title: this.title,
            completed: false,
            editing: false
        } );

        this.title = '';
        this.id += 1;
    }

    private removeTodo( id: number ): void {
        this.todos = this.todos.filter( todo => todo.id !== id );
    }

    private editTitle( todo: Todo ): void {
        if ( todo.completed ) {
            return;
        }
        todo.editing = true;
        this.prevTitle = todo.title;
    }

    private doneEdit( todo: Todo ): void {
        todo.editing = false;
        if ( !this.title.trim() ) {
            todo.title = this.prevTitle;
        }
    }

    private cancelEditing( todo: Todo ): void {
        todo.title = this.prevTitle;
        todo.editing = false;
    }
}
