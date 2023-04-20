import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/Website/services/client.service';
import { Meal } from 'src/app/interfaces/meal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent {
diverr=false
divedit = false
id : any
singleMeal : any 
image : any
  model : Meal = {
    mealName:"",
    mealIngredients:"",
    mealPrice:"",
    mealCategory:"",
  }

constructor(private adminserv : AdminService, private activeRouter : ActivatedRoute , 
            private clientSev: ClientService){

    activeRouter.paramMap.subscribe(par=>{
      this.id = par.get('id')
      console.log(this.id);

        clientSev.getSingleMeal(this.id).subscribe(res=>{
          this.singleMeal = res.data
          console.log(this.singleMeal);
          
        })
     })
     
  }

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

    this.adminserv.editMeal(this.id,formData).subscribe(res=>{
      console.log(res)
      if(res.apiStatus){
        this.divedit = true
      }
      else{
        this.diverr = true
      }
    })
   }
  }




}
