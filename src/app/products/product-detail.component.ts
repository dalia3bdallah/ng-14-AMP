import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from './products';
import { ProductService } from './product.service';


@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string="Product Details" ;
  //productId :number | undefined ;
  errorMessage="";
  product :Iproduct | undefined ;

  constructor(private route:ActivatedRoute ,
              private router:Router,
              private productService:ProductService){ }

  ngOnInit(): void {
    const id =Number(this.route.snapshot.paramMap.get('id'));
      //this.productId = id;
      if(id){
        this.getProduct(id);
      }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: (product: Iproduct | undefined) => this.product = product,
      error: (err: string) => this.errorMessage = err
    })
  }
  onBack():void{
    this.router.navigate(["/products"])
  }
}
