import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './models/product.models';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR3ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTU0OTY0MDIwOCwiZXhwIjoxNTQ5NzI2NjA4fQ.vdZlKo324rxMxh25shopxDrQju31HKzjLo1MntqAocY' })
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private psUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.psUrl);
  }
  
  deleteProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.psUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('Message')
  }
  
}
