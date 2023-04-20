import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public clientserv : ClientService){}
  handleClick(){
    localStorage.removeItem('token')
    this.clientserv.isLogin = false
  }
}
