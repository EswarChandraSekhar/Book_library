import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtodo } from './addtodo';

describe('Addtodo', () => {
  let component: Addtodo;
  let fixture: ComponentFixture<Addtodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addtodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addtodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
