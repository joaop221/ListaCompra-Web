import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { ListService } from 'src/app/services/list.service';
import { first } from 'rxjs/operators';
import { ListDialogModel } from 'src/app/models/ui/lista-dialog.model';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {
  listForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private listService: ListService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: ListDialogModel,
    private dialogRef: MatDialogRef<ListModalComponent>
  ) { }

  ngOnInit() {
    this.listForm = this.formBuilder.group({
      list: ['', Validators.required]
    });
  }

  get form() { return this.listForm.controls; }

  onSubmit() {
    if (!this.listForm.invalid) {

      this.listService.criar(this.form.list.value, this.data.groupId)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
            if (data) {
              this.dialogRef.close();
            } else {
              this.snackBar.open('Erro ao criar lista', 'Ok', { duration: 2000 });
            }
          },
          error => {
            console.log(error);
            this.snackBar.open('Erro ao criar lista', 'Ok', { duration: 2000 });
        });
    } else {
      this.form.list.markAsDirty();
    }
  }
}
