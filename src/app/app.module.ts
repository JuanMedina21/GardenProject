import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { AboutCoComponent } from './about-co/about-co.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';

import { DisplayProductComponent } from './display-product/display-product.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    AboutCoComponent,
    ContactComponent,
    FooterComponent,
    BannerComponent,

    DisplayProductComponent,
    CreateProductComponent

  ],
  imports: [
    BrowserModule, 
    HttpClientModule, AppRoutingModule
  ],
  providers: [ ProductService, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
