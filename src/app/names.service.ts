import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(private http:HttpClient) { }

  // getData()
  // {
  //   let url = "https://jsonplaceholder.typicode.com/todos";
    
  //   return this.http.get(url);
  // }

  getData()
  {
    let url = "https://localhost:7158/api/Names?genderId=false";
    // let url = "#";
    return this.http.get(url);
  }
}
