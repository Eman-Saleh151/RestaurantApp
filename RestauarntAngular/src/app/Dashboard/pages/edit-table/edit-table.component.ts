import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Table } from 'src/app/interfaces/table';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/Website/services/client.service';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent {
  
  id : any
  singleTaple : any 
  model:Table = {
    tableNumber : 0 ,
    personTableNumber : 0
  }


  constructor(private adminserv : AdminService ,private activeRouter : ActivatedRoute, 
    private clientSev: ClientService){

      activeRouter.paramMap.subscribe(par=>{
        this.id = par.get('id')
        console.log(this.id);
       })

    }


  handleSubmit(form : NgForm){
    if(form.valid){
      this.adminserv.editTable(this.id,this.model).subscribe(res=>{
        if(res.apiStatus){
          alert("Edit Table Done")
        }
      })
    }
  }




}
