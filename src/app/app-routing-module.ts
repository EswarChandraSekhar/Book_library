import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AddBook } from './components/add-book/add-book';
import { Books } from './components/books/books';
import { BookDetail } from './components/book-detail/book-detail';
import { Author } from './components/author/author';
import { AddAuthor } from './components/add-author/add-author';
import { AuthorList } from './components/author-list/author-list';
import { BookManagement } from './components/book-management/book-management';
import { Todo } from './todo/todo';
import { Addtodo } from './addtodo/addtodo';
import { Todolist } from './todolist/todolist';
import { Login } from './login/login';
import { Register } from './register/register';

const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'addbook',
    component: AddBook
  },
  {
    path: 'books',
    component: Books
  },
  {
    path: 'book-management',
    component: BookManagement
  },
  {
    path: 'book/:id',
    component: BookDetail
  },
  {
    path: 'author',
    component: Author,
    children: [
      {
        path: 'add-author',
        component: AddAuthor
      },
      {
        path: 'author-list',
        component: AuthorList
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'author-list'
      }
    ]
  },
  {
    path: 'todo',
    component: Todo,
    children:[{
      path: 'addtodo',
      component: Addtodo
    },
    {
      path: 'todolist',
      component: Todolist
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'todolist'
    }
    ]
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
