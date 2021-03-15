import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';



@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolver implements Resolve<boolean> {

  constructor(
    private apiService: ApiService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const movieId:any = route.paramMap.get('id');
    console.log("ruta resolver", route);
    
    return this.apiService.getMovie(movieId) 
  }
}
