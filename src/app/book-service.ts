import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: any[] = [
    {
     title: "The Hidden Hindu",
     author : "Akshat Gupta",
     genre: "Fantasy",
     description: "Book 1 of The Hidden Hindu trilogy, blending timeless Hindu mythology with science fiction.",
     image_url: "./the_hidden_hindu.jpg"
  },
  {
    title: "The Housemaid",
    author: "Freida McFadden",
    genre: "Thriller",
    description: "An absolutely addictive psychological thriller with a jaw-dropping twist.",
    image_url: "./the_house_maid.jpg"
  },
  {
    title: "Energize Your Mind",
    author: "Gaur Gopal Das",
    genre: "Self-help",
    description: "Learn the Art of Mastering Your Thoughts, Feelings and Emotions.",
    image_url: "./energize_your_mind.jpg"
  }
  ];

  constructor(){}

  addbookList(book:any){
    this.books.push(book)
  }

  getbookList(){
    return this.books
  }




 
}
