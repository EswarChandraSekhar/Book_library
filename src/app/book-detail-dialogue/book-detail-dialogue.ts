import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book-detail-dialogue',
  standalone: false,
  templateUrl: './book-detail-dialogue.html',
  styleUrls: ['./book-detail-dialogue.css']
})
export class BookDetailDialogue implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log(this.data)
  }
}
