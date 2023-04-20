import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/Website/services/client.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent {
  meals:any[]=[]
  constructor(private clientServ : ClientService , private router : Router ,private adminserv : AdminService){
    clientServ .getMeals().subscribe(res=>{
      this.meals = res.data
    })
  }
  handleadd(){
    this.router.navigateByUrl("Dash-meals/addmeal")
  }
  handleEdit(id:any){
    this.router.navigateByUrl(`Dash-meals/${id}`)
  }
  handelDelet(id:any){
    this.adminserv.deleteMeal(id).subscribe(res=>{
      if(res.apiStatus){
        
        this.clientServ.getMeals().subscribe(res=>{
          this.meals = res.data
        })
      }

    })

  }
  handleUnav(id:any){
    this.adminserv.unavaliMeal(id).subscribe(res=>{
      if(res.apiStatus){
        this.clientServ.getMeals().subscribe(res=>{
          this.meals = res.data
        })

      }
    })
  }
}
