import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLogin } from 'src/app/interfaces/user-login';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model : UserLogin ={
    email: '',
    password : ''
  }

  msgError=null
  pageType:any
  constructor(public clientserv : ClientService , private router : Router , private activedRouter : ActivatedRoute){
    
 

  }

  ngOnInit(){
    this.activedRouter.data.subscribe(res=>{
      this.pageType = res['type']

      console.log(this.clientserv.registerFlag)
       console.log(this.pageType)

      if(this.pageType == 'admin'){
        this.clientserv.registerFlag = false
        console.log(this.clientserv.registerFlag)
      }

   })
  }
    
    handleSubmit(form : NgForm){

        if(form.valid){

            if(this.pageType == 'client'){
               this.clientserv.loginClient(this.model).subscribe(resClient=>{

                localStorage.setItem('token' , resClient.data.token)
                this.clientserv.isLogin = true
                if(resClient.apiStatus) this.router.navigateByUrl('/menu')
                },
                (e)=>{
                  this.msgError = e.error.message
                })
            }

            else if(this.pageType == 'admin'){
              
              
              this.clientserv.loginAdmin(this.model).subscribe(resAdmin=>{
                localStorage.setItem('token' , resAdmin.data.token)
                this.clientserv.isLogin = true
                  if(resAdmin.apiStatus) this.router.navigateByUrl('/DashBoard')
                },
                (e)=>{
                  console.log(e.error.message)
                  this.msgError = e.error.message
                })
            }

        
        
        
        }
    }
    
}


            //admin
            // this.clientserv.loginAdmin(this.model).subscribe(resAdmin=>{
            //         console.log(resAdmin)
            //         if(resAdmin.apiStatus) this.router.navigateByUrl('/Dash-home')
            // },
            // (e)=>{
            //   console.log(e.error.message)
            //   this.msgError = e.error.message
            // })