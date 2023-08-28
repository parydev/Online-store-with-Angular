import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
   products = [{
    id : 1,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :false,
    items_left : 3,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 2,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :false,
    items_left : 0,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 3,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 9,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 4,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :false,
    items_left : 0,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 5,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 3,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 6,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 3,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 7,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 8,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 9,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 0,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 10,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 11,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 12,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 13,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 14,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 15,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 16,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 17,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 18,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 19,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 20,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
   {
    id : 21,
    name : "Nike React Infinity Run",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand : "NIKE",
    gender : "MEN",
    category :"RUNNING",
    size : [6,7,8,9,10],
    color : ["white","blue","black"],
    price : 160,
    is_in_inventory :true,
    items_left : 7,
    imageURL : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-8tM02K.png"


   },
  ]
  totalProducts = this.products.length;
  totalinStock : number= this.products.filter( p => p.is_in_inventory === true).length;
  totaloutofStock = this.products.filter( p => p.is_in_inventory === false).length;
}
