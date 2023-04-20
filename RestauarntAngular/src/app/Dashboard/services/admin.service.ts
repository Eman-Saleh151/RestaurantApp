import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient ) { }
  Url = "http://localhost:5000/api/"

  //meals
  addMeal(obj:any):Observable<any>{
    return this.http.post(`${this.Url}meal/addMeal` , obj)
  }
  editMeal(id:any , obj:any):Observable<any>{
    return this.http.patch(`${this.Url}meal/edit/${id}` , obj)
  }
  deleteMeal(id:any):Observable<any>{
    return this.http.delete(`${this.Url}meal/delete/${id}`)
  }
  unavaliMeal(id:any):Observable<any>{
    return this.http.patch(`${this.Url}meal/unAvaliableMeal/${id}`,null)
  }
 
  //tables
  addTable(obj:any):Observable<any>{
    return this.http.post(`${this.Url}table/addTable` , obj)
  }
  editTable(id:any , obj:any):Observable<any>{
    return this.http.patch(`${this.Url}table/edit/${id}` , obj)
  }
  deleteTable(id:any):Observable<any>{
    return this.http.delete(`${this.Url}table/delete/${id}`)
  }
  unavaliTable(id:any):Observable<any>{
    return this.http.patch(`${this.Url}table/unAvaliableTable/${id}`,null)
  }


}
