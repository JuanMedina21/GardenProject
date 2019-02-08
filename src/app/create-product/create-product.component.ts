import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  products = [];
  constructor(private psService: ProductService) { }

  ngOnInit() {
    this.findBooks();
  }

  findBooks() : void {
    this.psService.getProducts().subscribe(Products => {
      this.products = Products;
      this.products.reverse();
    })
  }

 

}
