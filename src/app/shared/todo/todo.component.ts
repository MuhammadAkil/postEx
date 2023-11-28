
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import Swal from 'sweetalert2';
import { MyserviceService } from 'src/app/auth/services/myservice.service';

import { interval } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  currentDate: Date = new Date();
  userData: any;

  todo: any;
  editMode: boolean = false;
  updatedText: string = '';
  search: string = '';
  todoList: any[] = [];
  filteredItems: any[] = [];


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private todoService: MyserviceService) {
    // this.auth.profile()

  }

  ngOnInit(): void {

    this.getTodoListByUser();
  }



  // getTodo() {
  //   return this.todoService.getTodo()
  // }
  showSuccess: boolean = false;
  showError: boolean = false;
  confirmError: boolean = false
  showUpdate: boolean = false
  showSuccessAlert() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }
  showUpdateAlert() {
    this.showUpdate = true;
    setTimeout(() => {
      this.showUpdate = false;
    }, 3000);
  }
  confirmAlert() {
    this.confirmError = false
  }
  showErrorAlert() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 3000);
  }

  dismissAlert() {
    this.showSuccess = false;
  }

  filterItems(): void {
    console.log('Todo List:', this.todoList);
    console.log('Search Term:', this.search);

    if (this.todoList && this.todoList.length > 0) {
      this.filteredItems = this.todoList.filter((todo: any) =>
        todo.todo && todo.todo.toLowerCase().includes(this.search.toLowerCase())
      );
      console.log('Filtered Items:', this.filteredItems);
    } else {
      this.filteredItems = [];
    }
  }


  addTodo() {
    if (this.todo.trim() !== '') {
      this.todoService.addTodo(this.todo);
      this.showSuccessAlert()
      this.todo = '';
      this.getTodoListByUser()
    }
  }


  editedTodoId: number | null = null;

  editTodo(todo: any) {
    this.editedTodoId = todo.id;
    this.updatedText = todo.todo;
  }
  updateTodo() {
    if (this.editedTodoId !== null && this.updatedText.trim() !== '') {
      this.todoService.updateTodo(this.editedTodoId, this.updatedText).subscribe(() => {
        this.editedTodoId = null;
        this.updatedText = '';
        this.showUpdateAlert()
        this.getTodoListByUser();

      });
    }
  }
  date() {
    let date = new Date()
  }


  getTodoListByUser() {
    const currentUserId = this.todoService.getCurrentUserId();

    if (currentUserId !== null) {
      this.todoService.getTodoListByUser(currentUserId).subscribe((data: any[]) => {
        this.todoList = data;
        this.filteredItems = this.todoList
      });
    }
  }




  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.showErrorAlert()
      this.getTodoListByUser()
    });
  }

  deleteEntireDatabase() {
    this.todoService.deleteDatabase()


      .then(() => {
        console.log('Database deleted')
      }).catch(error => {
        console.error('Error: ' + error);
      });
  }

}
