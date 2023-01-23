import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.scss']
})
export class FormpageComponent implements OnInit {
  isVisible= false;
  isLoaded = false;
  idProduct: any;
  
  id!: number;
  productForm!: FormGroup; 
  newProduct: any = {
    image: '',
    name:'' ,
    description:'' ,
    price:'',
    stars: ''
  }
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void { 

    this.route.paramMap.subscribe((params) => { 
      this.idProduct = params.get('id')
      if(this.idProduct){
        this.getProduct(params.get('id'))
      } else {
        this.initProductData({
        img: '',
        name:'',
        description:'',
        price:'',
        stars:''
        })
      }
    })

    
  } 

 initProductData(product: any){
    this.isLoaded = true;
    this.newProduct = product
    this.productForm = this.formBuilder.group({
      name:[product.name],
      price:[product.price],
      description:[product.description],
      stars:[product.stars], 
      image:[product.image]
      
    })
    this.productForm.valueChanges.subscribe(changes => { //
      this.newProduct = changes
    })
 }

  getProduct(id: any) {
      this.productService
      .getProduct(id)
      .subscribe((product) => {
        console.log(product)
        this.initProductData(product)
      });
  } 


  onSubmit(){
    console.log(this.newProduct);
    if (this.idProduct) {
      this.productService
      .putProduct(this.idProduct, this.productForm.value)
      .subscribe(() =>{});
    } else {
      this.productService
      .postProducts(this.newProduct)
      .subscribe(() =>{});
    }
    this.productForm.reset();
 
  }

  deleteProduct(){
    this.productService.deleteProduct(this.idProduct).subscribe((data: any) => {})
    this.router.navigate(['/'])
  }

}
