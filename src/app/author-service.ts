import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  authors = [
    {
      id: 1,
      name: 'J.K. Rowling',
      dob: '1965-07-31',
      nationality: 'British',
      image: './j.k rowling.jpg',
      biography: 'Famous for the Harry Potter series.'
    },
    {
      id: 2,
      name: 'George R. R. Martin',
      dob: '1948-09-20',
      nationality: 'American',
      image: './George R. R. Martin.jpg',
      biography: 'Known for A Song of Ice and Fire.'
    },
    {
      id: 3,
      name: 'Chetan Bhagat',
      dob: '1974-04-22',
      nationality: 'Indian',
      image: './chetan-bhagat.jpg',
      biography: 'Popular Indian author known for novels like "Five Point Someone" and "2 States".'
    },
    {
      id: 4,
      name: 'Arundhati Roy',
      dob: '1961-11-24',
      nationality: 'Indian',
      image: "./arundhati-roy.jpg",
      biography: 'Author of "The God of Small Things", winner of the Booker Prize.'
    },
    {
      id: 5,
      name: 'Dan Brown',
      dob: '1964-06-22',
      nationality: 'American',
      image: './dan brown.jpg',
      biography: 'Famous for mystery thrillers like "The Da Vinci Code" and "Angels & Demons".'
    }

  ];

  addauthorList(author:any){
    this.authors.push(author)
  }

  getauthors() {
    return [...this.authors];
  }
}
