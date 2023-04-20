import { Component } from '@angular/core';
import { ClientService } from './Website/services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReastaurantApp';

  constructor(private clientserv : ClientService){
    let token = localStorage.getItem('token')
    if(token){
      clientserv.isLogin = true
    }
  }
}
