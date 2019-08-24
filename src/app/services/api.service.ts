import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://192.168.43.225/api/'
  constructor(private http: HttpClient) { }

  getInfoApi(){
    return this.http.get(`${this.baseUrl}`);
  }
}
