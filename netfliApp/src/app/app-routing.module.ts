import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/views/movies/movies.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { ApiResolver } from './services/api.resolver';
import { MovieDetailResolver } from './services/movie-detail.resolver';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'/movies'},
  {
    path: 'movies',
    pathMatch: 'full',
    component: MoviesComponent,
    resolve: {
      moviesResolve: ApiResolver
    }
  },
 {
    path: 'movie',
    data: {title: 'movie'},
    children:[
      {
        path: ':id',
        component: MovieDetailComponent,
        data: {title: 'movie-detail'},
        resolve: {
        movieDetailResolve: MovieDetailResolver} 
      }
    ]
        
  }, 

  { path: '404', component: PageNotFoundComponent },
  { path: '**',  redirectTo: '/404', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

