import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
    product : {
      id : number,
      name : string,
      description : string,
      brand : string,
      gender : string,
      category : string,
      size : number[],
      color : string[],
      price : number,
      is_in_inventory : boolean,
      items_left : number,
      imageURL : string
    }
}
