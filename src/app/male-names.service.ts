import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaleNamesService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url = "https://localhost:7158/api/Names?genderId=true";
    return this.http.get(url);
  }
}
