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
  
  id!: number;
  productForm!: FormGroup;
  newProduct: any = {
    image: '',
    name:'' ,
    description:'' ,
    price:'',
    stars: ''
  }
  constructor(private formBuilder: FormBuilder, private productService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router ){}

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(() => {
    //   this.id = params.get('id');
    //   this.productService.getProducts(this.id).subscribe()
    // })
    this.productForm = this.formBuilder.group({
      name:['', [Validators.required]],
      price:['', [Validators.required]],
      description:['', [Validators.required]],
      stars:['', [Validators.required]], 
      image:['']
    })

    this.productForm.valueChanges.subscribe(changes =>{
      this.newProduct = changes
    })


  } 
  onSubmit(){
    console.log(this.newProduct);
    this.productService.postProducts(this.newProduct).subscribe((data) =>{
      console.log(data);
    })
    this.productForm.reset();
 
  }

  deleteProduct(){
    this.productService.deleteProduct(this.id).subscribe((data: any) => {})
    this.router.navigate(['/'])
  }

}
