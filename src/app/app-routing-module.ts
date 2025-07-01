import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AddBook } from './components/add-book/add-book';
import { Books } from './components/books/books';
import { BookDetail } from './components/book-detail/book-detail';
import { Author } from './components/author/author';
import { AddAuthor } from './components/add-author/add-author';
import { AuthorList } from './components/author-list/author-list';

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
