import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModelComponent } from 'src/app/models/delete-model/delete-model.component';
@Component({
  selector: 'app-domain-details',
  templateUrl: './domain-details.component.html',
  styleUrls: ['./domain-details.component.scss']
})
export class DomainDetailsComponent {

  constructor(private matDialog: MatDialog) {

  }
  deleteModel() {
    this.matDialog.open(DeleteModelComponent,{width:'45%',height:'60  %'});
  }
}
