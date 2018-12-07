import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.scss']
})
export class GroupModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<GroupModalComponent>
  ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
