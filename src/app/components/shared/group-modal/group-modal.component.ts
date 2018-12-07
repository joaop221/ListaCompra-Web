import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GroupService } from 'src/app/services/group.service';
import { GroupModel } from 'src/app/models/group.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.scss']
})
export class GroupModalComponent implements OnInit {
  groupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private groupService: GroupService,
    public snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<GroupModalComponent>
  ) { }

  ngOnInit() {
    this.groupForm = this.formBuilder.group({
      group: ['', Validators.required]
    });
  }

  get form() { return this.groupForm.controls; }

  onSubmit() {
    if (!this.groupForm.invalid) {
      const groupModel: GroupModel = {
        id: 0,
        nome: this.form.group.value
      };

      this.groupService.criar(groupModel)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
            if (data) {
              this.dialogRef.close();
            } else {
              this.snackBar.open('Erro ao criar grupo', 'Ok', { duration: 2000 });
            }
          },
          error => {
            console.log(error);
            this.snackBar.open('Erro ao criar grupo', 'Ok', { duration: 2000 });
        });
    } else {
      this.form.group.markAsDirty();
    }
  }
}
