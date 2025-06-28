import { Component } from '@angular/core';
import { AuthorService } from '../../author-service';

@Component({
  selector: 'app-author-list',
  standalone: false,
  templateUrl: './author-list.html',
  styleUrl: './author-list.css'
})
export class AuthorList {

  authors: any[] = []

  constructor(public AuthorServiceService: AuthorService){}

  ngOnInit(): void {
    this.AuthorServiceService.getAuthorList().subscribe(
      (response)=>{
           this.authors = response;
      },
      (error)=>{

      }
    )
  }

}
