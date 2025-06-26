import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  authors = [
    {
      id: 1,
      name: 'Akshat Gupta',
      dob: '1965-07-31',
      nationality: 'Indian',
      image: './Akshat_Gupta.jpg',
      biography: 'THe Hidden Hindu'
    },
    {
      id: 2,
      name: 'Freida McFadden',
      dob: '1948-09-20',
      nationality: 'American',
      image: './freida_mcfadden.jpg',
      biography: 'The Housemaid'
    },
    {
      id: 3,
      name: 'Gaur Gopal Das',
      dob: '1974-04-22',
      nationality: 'Indian',
      image: './gaur.jpg',
      biography: 'Popular Indian author known for novels like "Five Point Someone" and "2 States".'
    },
  ];

  addauthorList(author:any){
     let temp = localStorage.getItem('authorList')
     if(!temp){
      this.authors.push(author)
       localStorage.setItem('authorList',JSON.stringify(this.authors))
     }
     else{
        let authorList = JSON.parse(temp)
        authorList.push(author)
        localStorage.setItem('authorList',JSON.stringify(authorList))
     }
    
  }

  getauthors() {

    let temp = localStorage.getItem('authorList')
    if(!temp){
      localStorage.setItem('authorList',JSON.stringify(this.authors))
    }
    else{
      return JSON.parse(temp)
    }
  }
}
