import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { ApiService } from './api-service/api.service';
import { RepoComponent } from './repo/repo.component';
import { RoutingComponent } from '../app/routing/routing.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    RepoComponent,
    HighlightDirective,
    


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingComponent,


  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
