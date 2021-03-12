import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { MoviesComponent } from './components/views/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
