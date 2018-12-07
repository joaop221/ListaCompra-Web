import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { GroupModalComponent } from '../../shared/group-modal/group-modal.component';
import { GroupModel } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groupList: Array<GroupModel>;

  constructor(
    private dialog: MatDialog,
    private overlay: Overlay,
    private router: Router,
    private groupService: GroupService
  ) {}

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.groupService.listar().subscribe(item => this.groupList = item);
  }

  onSelect(group: GroupModel) {
    this.router.navigate([`groups/${group.id}`]);
  }

  add() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '500px';
    dialogConfig.height = '200px';
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop();

    const dialogRef = this.dialog.open(GroupModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => this.updateList());
  }
}
