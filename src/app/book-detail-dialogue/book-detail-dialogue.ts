import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail-dialogue',
  standalone: false,
  templateUrl: './book-detail-dialogue.html',
  styleUrls: ['./book-detail-dialogue.css']
})
export class BookDetailDialogue implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
            private router:Router,
             public dialogRef: MatDialogRef<BookDetailDialogue>,
  ) {}

  ngOnInit(): void {}
  handleBookDetail(bookId: any){
    this.router.navigate(['book',bookId])
    this.dialogRef.close();
  }
}
