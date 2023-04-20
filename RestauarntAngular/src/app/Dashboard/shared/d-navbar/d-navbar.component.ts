import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/Website/services/client.service';

@Component({
  selector: 'app-d-navbar',
  templateUrl: './d-navbar.component.html',
  styleUrls: ['./d-navbar.component.css']
})
export class DNavbarComponent {
  constructor(public clientserv :ClientService , private router : Router){}
  handleClick(){
    localStorage.removeItem('token')
    this.clientserv.isLogin = false
    this.router.navigateByUrl('/login')
    
  }

}
