import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meal } from 'src/app/interfaces/meal';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent {
 
  image : any
  model : Meal = {
    mealName:"",
    mealIngredients:"",
    mealPrice:"",
    mealCategory:"",
  }

  constructor(private adminserv : AdminService){}
  handleChange(eve :any){
    this.image = eve.target.files[0]
  }

  handleSubmit(form : NgForm){
    if(form.valid){
    let formData = new FormData()
    formData.append('img',this.image)
    formData.append('mealName' , this.model.mealName)
    formData.append('mealIngredients' , this.model.mealIngredients)
    formData.append('mealPrice' , this.model.mealPrice)
    formData.append('mealCategory' , this.model.mealCategory)

    this.adminserv.addMeal(formData).subscribe(res=>{
      console.log(res)
    })
   }
  }

}
