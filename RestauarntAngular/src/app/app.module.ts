import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule }from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Website/pages/home/home.component';
import { AboutComponent } from './Website/pages/about/about.component';
import { MenuComponent } from './Website/pages/menu/menu.component';
import { SingleMealComponent } from './Website/pages/single-meal/single-meal.component';
import { BookTableComponent } from './Website/pages/book-table/book-table.component';
import { RegisterComponent } from './Website/pages/register/register.component';
import { LoginComponent } from './Website/pages/login/login.component';
import { NavbarComponent } from './Website/shared/navbar/navbar.component';
import { HeaderComponent } from './Website/shared/header/header.component';
import { FooterComponent } from './Website/shared/footer/footer.component';
import { MealsComponent } from './Dashboard/pages/meals/meals.component';
import { AddMealComponent } from './Dashboard/pages/add-meal/add-meal.component';
import { EditMealComponent } from './Dashboard/pages/edit-meal/edit-meal.component';
import { EditTableComponent } from './Dashboard/pages/edit-table/edit-table.component';
import { AddTableComponent } from './Dashboard/pages/add-table/add-table.component';
import { TablesComponent } from './Dashboard/pages/tables/tables.component';
import { ContactComponent } from './Website/pages/contact/contact.component';
import { DNavbarComponent } from './Dashboard/shared/d-navbar/d-navbar.component';
import { DHomeComponent } from './Dashboard/pages/d-home/d-home.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    SingleMealComponent,
    BookTableComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MealsComponent,
    AddMealComponent,
    EditMealComponent,
    EditTableComponent,
    AddTableComponent,
    TablesComponent,
    ContactComponent,
    DNavbarComponent,
    DHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
