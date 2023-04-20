import { Component } from '@angular/core';
import { Register } from 'src/app/interfaces/register';
import { ClientService } from '../../services/client.service';
import { NgForm } from '@angular/forms';
import { UserLogin } from 'src/app/interfaces/user-login';
import { Router } from '@angular/router';
import { async } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model : Register = {
    fname: '',
    lname: '',
    email: '',
    password : '',
    age : 20 ,
    gender: null,
    phone : '',
    addresses : ''
  }
  modellog : UserLogin  ={
    email : this.model.email,
    password : this.model.password
  }
  msgError=null

  constructor(private clientServ : ClientService , private router : Router){}

  handleSubmit(form: NgForm){

    if(form.valid){

      
      this.clientServ.register(this.model).subscribe( res=>{
        if(res.apiStatus){
          alert('your account is creatted')
         const modellog ={
            email : this.model.email,
            password : this.model.password
          }
        
            this.clientServ.loginClient(modellog).subscribe(res=>{
              
            localStorage.setItem('token' , res.data.token)
                this.clientServ.isLogin = true
                if(res.apiStatus) this.router.navigateByUrl('/menu')
          },
          (e)=>{
            this.msgError = e.error.message
          }
          )
        
      }
      },
      (e)=>{
        this.msgError = e.error.message
      }
      )
    }

  }

}


  