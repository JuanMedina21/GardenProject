import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.models';

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

  delete(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.psService.deleteProduct(product).subscribe();
  }

}
