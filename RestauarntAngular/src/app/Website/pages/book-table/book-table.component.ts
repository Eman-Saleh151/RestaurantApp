import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent {
  bookErrFlag = false
  bookDoneFlag = false
  tableNotFoundDoneFlag = false
  tables:any[]=[]
 constructor( private clientService : ClientService , private router :Router){

  clientService.getTables().subscribe(res=>{
    this.tables = res.data
  })

 }

 handlebook(id :any){

    if(this.clientService.isLogin){
      this.clientService.bookTable(id).subscribe(res=>{
        console.log(res)
        if(res.Status = true){
          let response = confirm(` you want to book table ${res.data}`)
          if(response){
          this.bookDoneFlag=true
        }
        }else{
          this.tableNotFoundDoneFlag=true
        }

      })
    }
    else{
      this.bookErrFlag=true
    }
    
    

 }


 handleloginclick(){
  this.router.navigateByUrl('/login')
}

}
