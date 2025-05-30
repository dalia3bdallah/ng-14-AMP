import { Injectable } from '@angular/core';
import { Iproduct } from './products';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,catchError,tap, throwError,map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    // getProduct(id: number) {
    //   throw new Error('Method not implemented.');
    // }
    // private productUrl="src/api/products/products.json";
    private productUrl = 'api/products/products.json';
    constructor (private http: HttpClient){}
    
    getProducts(): Observable<Iproduct[]> {
        return this.http.get<Iproduct[]>(this.productUrl)
        .pipe(
            tap(data=>console.log('All :',JSON.stringify(data))) ,
            catchError(this.handleError)

        );
        
    }
  // Get one product
  // Since we are working with a json file, we can only retrieve all products
  // So retrieve all products and then find the one we want using 'map'
  getProduct(id: number): Observable<Iproduct | undefined> {
    return this.getProducts()
      .pipe(
        map((products: Iproduct[]) => products.find(p => p.productId === id))
      );
  }
    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      }
    
}
