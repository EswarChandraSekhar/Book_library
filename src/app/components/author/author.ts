import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  standalone: false,
  templateUrl: './author.html',
  styleUrl: './author.css'
})
export class Author {
  activeTab: string = 'author-list'
  handleActiveTab(value: string){
    this.activeTab = value;
  }
}
