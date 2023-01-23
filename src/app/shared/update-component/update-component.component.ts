import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.scss']
})
export class UpdateComponentComponent {
  // productForm!: FormGroup;
  // id: number = this.productService.id;
  // updatedProduct: any = this.productService.product;

  // constructor(private formBuilder: FormBuilder, private productService: ProductsService,  private router: Router){
    
  // }
  // ngOnInit(): void {
    
    
  //   this.productForm = this.formBuilder.group({
  //     name:['', [Validators.required]],
  //     price:['', [Validators.required]],
  //     description:['', [Validators.required]],
  //     stars:['', [Validators.required]], 
  //     image:['']
  //   })
  
  //   this.productForm!.valueChanges.subscribe(changes => {
  //     this.updatedProduct = changes;
  //   })
  

  // }
  // onSubmit(){
  //   console.log(this.updatedProduct);
  //   this.productService.postProducts(this.updatedProduct, this.id).subscribe((data) =>{
  //     console.log(data);
  //   })
  //   this.productForm.reset();
  //   this.router.navigate([`/product/${this.id}`]);
  // }

}
