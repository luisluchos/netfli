import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/views/movies/movies.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { ApiResolver } from './services/api.resolver';


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
  { path: '404', component: PageNotFoundComponent },
  { path: '**',  redirectTo: '/404', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

