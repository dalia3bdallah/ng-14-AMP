import { Component,OnDestroy, OnInit } from "@angular/core";
import { Iproduct } from "./products";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs";


@Component({
    // selector : 'pm-products',
    templateUrl :'./product-list.component.html',
    styleUrls:["./product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle:string="Product list";
    imageWidth:number=40;
    imageMargin: string ='auto';
    imgHeight:string = "40px";
    imgBackground:string ="#f8f8f8";
    imgBorder:string="1px solid #ccc";
    imgShow:boolean=false;
    //filteredValue :string =" cart";
    errorMessage: string='';
    clickedMassage :string="";
    /* 
    we can define a TypeScript definite assignment assertion.
     The bang, or exclamation point,
      tells the TypeScript compiler that we
     will handle the assignment of this property sometime later
    */
    sub!: Subscription;

    private _filteredValue: string = "";
    get filteredValue(): string {
    return this._filteredValue;
  }
    set filteredValue(value: string) {
    this._filteredValue = value;
   // console.log("the setter value is : " + this._filteredValue);
    console.log("the setter value is : " + value);
    this.filteredProducts = this.performfilterMethod(value);
  }
  filteredProducts: Iproduct[] =[];
    products: Iproduct[] =[];

    constructor(private productService :ProductService){}

    performfilterMethod(filterBy :string):Iproduct[]{
      filterBy =filterBy.toLocaleLowerCase();
      return this.products.filter((product :Iproduct)=>
        product.productName.toLocaleLowerCase().includes(filterBy))
    }
    imgToggle():void{
        this.imgShow = !this.imgShow;
    }
    ngOnInit(): void {
      //console.log("oninit");
      //default value 
      this.sub = this.productService.getProducts().subscribe({
        next:products =>{
          this.products=products;
          this.filteredProducts=this.products;
        },
        error:err =>this.errorMessage = err
      });
      // this.filteredValue="cart";
    }
    ngOnDestroy():void{
      this.sub.unsubscribe();
    }
    onRatingCicked(clickedMassage:string):void{
      this.clickedMassage = `${clickedMassage}`;
      
    }
}