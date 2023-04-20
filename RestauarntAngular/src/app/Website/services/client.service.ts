import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor( private http : HttpClient) { }
  registerFlag = true
  isLogin = false
  Url = "http://localhost:5000/api/"
  //meals
  getMeals():Observable<any>{
    return  this.http.get( `${this.Url}meal/showAllMeals`)
  }
  getMealsBreakFast():Observable<any>{
    return  this.http.get(`${this.Url}meal/showMealsBreakfast`)
  }
  getMealsLanuch():Observable<any>{
    return  this.http.get(`${this.Url}meal/showMealsLunch`)
  }
  getMealsDinner():Observable<any>{
    return  this.http.get(`${this.Url}meal/showMealsDinner`)
  }
  getMealsDessert():Observable<any>{
    return  this.http.get(`${this.Url}meal/showMealsDesserts`)
  }
  getMealsDrinks():Observable<any>{
    return  this.http.get(`${this.Url}meal/showMealsDrinks`)
  }

  getSingleMeal(mealId:any):Observable<any>{
    return  this.http.get(`${this.Url}meal/showSingleMeals/${mealId}`)
  }

  //tables
  getTables():Observable<any>{
    return this.http.get(`${this.Url}table/showAllTables`)
  }

  //login
  loginAdmin(data:any):Observable<any>{
    return  this.http.post(`${this.Url}admin/loginAdmin` , data)
  }
  loginClient(data:any):Observable<any>{
    return   this.http.post(`${this.Url}client/loginClient` , data)
  }
  //register
  register(data:any):Observable<any>{
    return this.http.post(`${this.Url}client/register` , data)
  }
  //order
  makeOrder(mealId:any):Observable<any>{

    return this.http.post(`${this.Url}meal/order/${mealId}`, null)
  }

  //book table
   bookTable(tableId:any):Observable<any>{

    return this.http.post(`${this.Url}table/bookTable/${tableId}`, null)
  }



}
