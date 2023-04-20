import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/Website/services/client.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  tables:any[]=[]
  constructor(private clientServ : ClientService , private router :  Router ,private adminserv : AdminService){
    clientServ .getTables().subscribe(res=>{
      this.tables = res.data
    })
  }
  handleadd(){
    this.router.navigateByUrl("Dash-tables/addtable")
  }
  handleEdit(id:any){
    this.router.navigateByUrl(`Dash-tables/${id}`)
  }
  handelDelet(id:any){
    this.adminserv.deleteTable(id).subscribe(res=>{
      if(res.apiStatus){
        
        this.clientServ.getTables().subscribe(res=>{
          this.tables = res.data
        })
      }

    })

  }
  handleUnav(id:any){
    this.adminserv.unavaliTable(id).subscribe(res=>{
      if(res.apiStatus){
        this.clientServ.getTables().subscribe(res=>{
          this.tables = res.data
        })

      }
    })
  }
}
