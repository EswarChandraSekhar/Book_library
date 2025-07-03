import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { AddBook } from './components/add-book/add-book';
import { Books } from './components/books/books';
import { BookDetail } from './components/book-detail/book-detail';
import { BookDetailDialogue } from './book-detail-dialogue/book-detail-dialogue';
import { FormsModule } from '@angular/forms';
import { SearchPipePipe } from './search-pipe-pipe';
import { Author } from './components/author/author';
import { AddAuthor } from './components/add-author/add-author';
import { AuthorList } from './components/author-list/author-list';
import { HttpClientModule } from '@angular/common/http';
import { Loader } from './loader/loader';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditAuthorDialog } from './components/edit-author-dialog/edit-author-dialog';
import { BookManagement } from './components/book-management/book-management';
import { Todo } from './todo/todo';
import { Addtodo } from './addtodo/addtodo';
import { Todolist } from './todolist/todolist';

@NgModule({
  declarations: [
    App,
    Home,
    AddBook,
    Books,
    BookDetail,
    BookDetailDialogue,
    SearchPipePipe,
    Author,
    AddAuthor,
    AuthorList,
    Loader,
    EditAuthorDialog,
    BookManagement,
    Todo,
    Addtodo,
    Todolist
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
