import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookManagement } from './book-management';

describe('BookManagement', () => {
  let component: BookManagement;
  let fixture: ComponentFixture<BookManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
