import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CusserviceService {
  private url : string = 'http://localhost:8087/sprmvcebmsproj/Customer';

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
  constructor(private http: HttpClient) { }
  getCustomersFromservice():Observable<Customer[]> {
   return this.http
   .get<Customer[]>(this.url+'/allcus')
   .pipe(retry(1),catchError(this.handleError));
  }
  getCustomer(cid: any): Observable<Customer> {
    return this.http
      .get<Customer>(this.url + '/getCus/' + cid,
      this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  createCustomer(customer:any):Observable<Customer>{
    console.log(customer);
    return this.http
      .post<Customer>(
        this.url + '/createCus',
       JSON.stringify(customer),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  updateCustomer(customer: any): Observable<Customer> {
    console.log(customer);
    return this.http
      .put<Customer>(
        this.url + '/updateCus',
       JSON.stringify(customer),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  deleteCustomer(cid: number): Observable<Customer> {
    console.log(cid + ' from deleteCustomer()');
   return this.http
      .delete<Customer>(this.url + '/deleteCus/' + cid,
      this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
      
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n Error Message : ${error.message} `;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
