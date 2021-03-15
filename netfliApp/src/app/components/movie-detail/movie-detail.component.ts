import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: any;

  constructor(private route: ActivatedRoute,
              private titleService:Title) { }

  ngOnInit(): void {
   /*  this.titleService.setTitle(this.route.snapshot.data.title); //para obteenr los datos que le pusmios al crar la ruta en routes

    this.platformId = this.route.snapshot.paramMap.get('id'); //para obtener los arametros de la url

    console.log("id:",this.route.snapshot); */
    

    this.route.data.subscribe(data => {
      console.log("data movies component-detail",data);
      
     this.movie = data.movieDetailResolve.movie;
     console.log("resolve",data.movieDetailResolve.movie);
     
     
     
   }); 
    
    
    
  }

}
