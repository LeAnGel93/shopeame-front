import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.scss']
})
export class ProductspageComponent implements OnInit {
  
  // @Input()  
  // ShowHide = function (){
  //   isVisible = true
  // }

  productsList: any[] = [];
  paintedProducts: any[] = [];
  constructor (
    private productService: ProductsService
    ){}
  ngOnInit(): void {
      this.productService.getProducts().subscribe((data: any) => {
      console.log(data);
      this.productsList = [...data]
      this.paintedProducts = [...data]
      })
    } 



    filter(name: string){
      let filteredProducts = this.productsList.filter((product) => product.name.toLowerCase().includes(name))
      this.paintedProducts = [...filteredProducts];
    }
  }
