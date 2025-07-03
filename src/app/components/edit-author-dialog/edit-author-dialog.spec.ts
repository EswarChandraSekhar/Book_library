import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuthorDialog } from './edit-author-dialog';

describe('EditAuthorDialog', () => {
  let component: EditAuthorDialog;
  let fixture: ComponentFixture<EditAuthorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAuthorDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAuthorDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
