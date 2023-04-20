import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-meal',
  templateUrl: './single-meal.component.html',
  styleUrls: ['./single-meal.component.css']
})
export class SingleMealComponent {

  id : any
  singleMeal:any
  meals:any[]=[]
  orderErrFlag = false
  orderDoneFlag = false
  orderNotFoundFlag = false

  constructor(private clientSrv : ClientService , private activedRouter : ActivatedRoute , private router : Router){
    
    clientSrv.getMeals().subscribe(res=>{
      this.meals= res.data
    })

    activedRouter.paramMap.subscribe(para=>{
      let id = para.get('id')
      
      clientSrv.getSingleMeal(id).subscribe(res=>{
        this.singleMeal = res.data
      })
      
    })

  }

  handelOrder(id :any){
    if(this.clientSrv.isLogin){
      this.clientSrv.makeOrder(id).subscribe(res=>{
        console.log(res)
        if(res.Status =true ){
        let response = confirm(`your order is ${res.data}`)
        console.log(response)
        if(response){
          this.orderDoneFlag=true
        }
        }else{
          this.orderNotFoundFlag=true
        }

      })
    }
    else{
      this.orderErrFlag=true
    }
    
  }
  handleloginclick(){
    this.router.navigateByUrl('/login')
  }
    
}
