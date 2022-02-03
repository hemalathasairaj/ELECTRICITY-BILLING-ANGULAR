import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Bill } from './Billfile';

@Injectable({
  providedIn: 'root'
})
export class BillserviceService {
  [x: string]: any;
  BillCustomer(billform: any) {
    throw new Error('Method not implemented.');
  }
  private url : string = 'http://localhost:8087/sprmvcebmsproj/Bill';
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
  constructor(private http: HttpClient) { }
  getBillsFromservice():Observable<Bill[]> {
    return this.http
    .get<Bill[]>(this.url+'/allcus')
   .pipe(retry(1),catchError(this.handleError));
   }
   getBill(billnumber: any): Observable<Bill[]> {
     return this.http
       .get<Bill[]>(this.url + '/getCus/' + billnumber,
       this.httpOptions
       )
       .pipe(retry(1), catchError(this.handleError));
   }
  generateBill(bill:any):Observable<Bill>{
     console.log(bill);
     return this.http
       .post<Bill>(
         this.url + '/createBill',
        JSON.stringify(bill),
         this.httpOptions
       )
       .pipe(retry(1), catchError(this.handleError));
   }
   updateBill(bill: any): Observable<Bill> {
     console.log(bill);
     return this.http
       .put<Bill>(
         this.url + '/updateCus',
        JSON.stringify(bill),
         this.httpOptions
       )
       .pipe(retry(1), catchError(this.handleError));
   }
   deleteBill(billnumber: number): Observable<Bill> {
     console.log(billnumber + ' from deleteBill()');
    return this.http
       .delete<Bill>(this.url + '/deleteCus/' + billnumber,
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
