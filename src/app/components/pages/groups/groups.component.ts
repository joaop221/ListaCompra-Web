import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { CreateGroupModalComponent } from '../create-group-modal/create-group-modal.component';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private overlay: Overlay
  ) {}

  ngOnInit() {
  }

  click() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '200px';
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop();
    this.dialog.open(CreateGroupModalComponent, dialogConfig);
  }
}
