import { Component } from '@angular/core';
import { Table } from 'src/app/interfaces/table';
import { AdminService } from '../../services/admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent {

  model:Table = {
    tableNumber : 0 ,
    personTableNumber : 0
  }
  constructor(private adminserv : AdminService){}
  handleSubmit(form : NgForm){
    if(form.valid){
      this.adminserv.addTable(this.model).subscribe(res=>{
        if(res.apiStatus){
          alert("Add Table Done")
        }
      })
    }
  }

}
