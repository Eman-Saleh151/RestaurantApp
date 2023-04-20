import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Website/pages/home/home.component';
import { AboutComponent } from './Website/pages/about/about.component';
import { MenuComponent } from './Website/pages/menu/menu.component';
import { ContactComponent } from './Website/pages/contact/contact.component';
import { BookTableComponent } from './Website/pages/book-table/book-table.component';
import { SingleMealComponent } from './Website/pages/single-meal/single-meal.component';
import { RegisterComponent } from './Website/pages/register/register.component';
import { LoginComponent } from './Website/pages/login/login.component';
import { DHomeComponent } from './Dashboard/pages/d-home/d-home.component';
import { MealsComponent } from './Dashboard/pages/meals/meals.component';
import { TablesComponent } from './Dashboard/pages/tables/tables.component';
import { EditMealComponent } from './Dashboard/pages/edit-meal/edit-meal.component';
import { AddMealComponent } from './Dashboard/pages/add-meal/add-meal.component';
import { AddTableComponent } from './Dashboard/pages/add-table/add-table.component';
import { EditTableComponent } from './Dashboard/pages/edit-table/edit-table.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:"menu" , component:MenuComponent},
  {path:"contact" , component:ContactComponent},
  {path:"bookatable" , component:BookTableComponent},
  {path:"menu/:id" , component:SingleMealComponent},
  {path:"login/register" , component:RegisterComponent},
  {path:"login" , component:LoginComponent ,data:{type : 'client'}},
  {path:"DashLogin" , component:LoginComponent, data:{type : 'admin'}},
  {path:"DashBoard" ,component:DHomeComponent},
  {path:"DashBoard/Dash-meals" , component:MealsComponent},
  {path:"DashBoard/Dash-tables" , component:TablesComponent},
  {path:"Dash-meals/addmeal" , component:AddMealComponent},
  {path:"Dash-meals/:id" , component:EditMealComponent},
  {path:"Dash-tables/addtable" , component:AddTableComponent},
  {path:"Dash-tables/:id" , component:EditTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
