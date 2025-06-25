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
  },
  {
    title: "The Stationery Shop of Tehran",
    author: "Marjan Kamali",
    genre: "Romance",
    description: "A love story set in a country in turmoil.",
    image_url: "./stationery_shop_of_tehran.jpg"
  },
  {
    title: "The Koala Who Could",
    author: "Rachel Bright",
    genre: "Children's",
    description: "A children's story about a koala who learns to be brave.",
    image_url: "./the_koala.jpg"
  },
  {
    title: "Chaali Din",
    author: "Dr. Dhugga Gurpreet",
    genre: "Fiction",
    "description": "Details about this book are limited, but it appears to be a work by Dr. Dhugga Gurpreet.",
    image_url: "./chaali_din.jpg"
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
