import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../models/product.models';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {
  public _product = {};

  constructor(private psService: ProductService) {}

  ngOnInit() {
  }

  @Input() set product(product: any) {
    this._product = product;
  }

  get product(): any {
    return this._product;
  }

  delete(product: Product): void {
    this.psService.deleteProduct(product).subscribe();
  }



}
