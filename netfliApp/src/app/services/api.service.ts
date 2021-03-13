import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  BASE_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAllMovies(){
    return this.http.get(`${this.BASE_URL}/movies`);
  }
} 

