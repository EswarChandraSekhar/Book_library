import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { AddBook } from './components/add-book/add-book';
import { Books } from './components/books/books';
import { BookDetail } from './components/book-detail/book-detail';

@NgModule({
  declarations: [
    App,
    Home,
    AddBook,
    Books,
    BookDetail
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
