import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {
  public _product = {};


  ngOnInit() {
  }

  @Input() set product(product: any) {
    this._product = product;
}

  get product() : any {
    return this._product;
}



}
