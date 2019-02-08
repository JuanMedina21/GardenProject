import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayProductComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [ ProductService, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
