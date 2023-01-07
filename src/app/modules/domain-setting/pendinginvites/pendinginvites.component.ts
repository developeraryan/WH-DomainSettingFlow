import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModelComponent } from 'src/app/models/delete-model/delete-model.component';
@Component({
  selector: 'app-pendinginvites',
  templateUrl: './pendinginvites.component.html',
  styleUrls: ['./pendinginvites.component.scss']
})
export class PendinginvitesComponent {
 role ="Admin";
 status ="Pending";
constructor(private matDialog: MatDialog) {

}

 deleteModel() {
  this.matDialog.open(DeleteModelComponent,{width:'45%',height:'60%'}  );
}
}
