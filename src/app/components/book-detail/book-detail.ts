import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../book-service';

@Component({
  selector: 'app-book-detail',
  standalone: false,
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetail implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
    private bookService: BookService
  ){

  }
  bookId: string | null = null;
  bookDetailLoader: boolean = true;
  bookDetailData: any = null;

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.bookId)
    this.bookDetailLoader = true;
    this.bookService.getBookDetail(this.bookId).subscribe(
      (response)=>{
        this.bookDetailData = response;
        this.bookDetailLoader = false;
      },
      (error)=>{
        this.bookDetailLoader = false;
      }
    )
  } 
}
