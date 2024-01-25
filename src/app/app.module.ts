import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailsComponent } from './details/details.component';
import { SearchStateService } from './services/search-state.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [SearchStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
