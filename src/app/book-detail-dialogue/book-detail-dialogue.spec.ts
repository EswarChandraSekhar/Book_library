import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailDialogue } from './book-detail-dialogue';

describe('BookDetailDialogue', () => {
  let component: BookDetailDialogue;
  let fixture: ComponentFixture<BookDetailDialogue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailDialogue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailDialogue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
