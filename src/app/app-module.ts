import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { AddBook } from './components/add-book/add-book';
import { Books } from './components/books/books';
import { BookDetail } from './components/book-detail/book-detail';
import { BookDetailDialogue } from './book-detail-dialogue/book-detail-dialogue';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Home,
    AddBook,
    Books,
    BookDetail,
    BookDetailDialogue
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
