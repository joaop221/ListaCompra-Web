import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupDetailModel } from 'src/app/models/group-detail.model';
import { GroupService } from 'src/app/services/group.service';
import { ListModel } from 'src/app/models/list.model';
import { ListService } from 'src/app/services/list.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { ListModalComponent } from '../../shared/list-modal/list-modal.component';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {
  group: GroupDetailModel;
  lists: ListModel[];

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private overlay: Overlay,
    private groupService: GroupService,
    private listService: ListService
  ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.groupService.detail(id).subscribe(group => this.group = group);
    this.updateList(id);
  }

  updateList(id: number) {
    this.listService.listar(id).subscribe(list => this.lists = list);
  }

  add() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '500px';
    dialogConfig.height = '200px';
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop();
    dialogConfig.data = { groupId: this.group.grupo.id };

    const dialogRef = this.dialog.open(ListModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => this.updateList(this.group.grupo.id));
  }
}
