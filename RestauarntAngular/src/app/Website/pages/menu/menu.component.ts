import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  meals:any[]=[]

  constructor(private clientService : ClientService ){
    clientService.getMeals().subscribe(res=>{
      this.meals = res.data
    })

  }

  handleMealsBreakfast(){
    this.clientService.getMealsBreakFast().subscribe(res=>{
      this.meals= res.data
    })
  }
  handleMealsLaunch(){
    this.clientService.getMealsLanuch().subscribe(res=>{
      this.meals= res.data
    })
  }
  handleMealsDinner(){
    this.clientService.getMealsDinner().subscribe(res=>{
      this.meals= res.data
    })
  }
  handleMealsDesserts(){
    this.clientService.getMealsDessert().subscribe(res=>{
      this.meals= res.data
    })
  }
  handleMealsDrinks(){
    this.clientService.getMealsDrinks().subscribe(res=>{
      this.meals= res.data
    })
  }

    





}
