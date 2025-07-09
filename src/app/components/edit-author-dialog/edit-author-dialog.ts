import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-author-dialog',
  standalone: false,
  templateUrl: './edit-author-dialog.html',
  styleUrl: './edit-author-dialog.css'
})
export class EditAuthorDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
      private dialogRef: MatDialogRef<EditAuthorDialog>
  ){

  }

  handleClose(){
    this.dialogRef.close("closed")
  }
}
