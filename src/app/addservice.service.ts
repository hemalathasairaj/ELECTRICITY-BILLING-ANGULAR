import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Address } from './Address';

@Injectable({
  providedIn: 'root'
})
export class AddserviceService {
  private url : string = 'http://localhost:8087/sprmvcebmsproj/Address';

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
  constructor(private http: HttpClient) { }
  getAddressFromservice():Observable<Address[]> {
   return this.http
   .get<Address[]>(this.url+'/allcus')
   .pipe(retry(1),catchError(this.handleError));
  }
  getAddress(doorno: any): Observable<Address> {
    return this.http
      .get<Address>(this.url + '/getCus/' + doorno,
      this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  createAddress(address:any):Observable<Address>{
    console.log(address);
    return this.http
      .post<Address>(
        this.url + '/createCus',
       JSON.stringify(address),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  updateAddress(address: any): Observable<Address> {
    console.log(address);
    return this.http
      .put<Address>(
        this.url + '/updateCus',
       JSON.stringify(address),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  deleteAddress(doorno: number): Observable<Address> {
    console.log(doorno + ' from deleteAddress()');
   return this.http
      .delete<Address>(this.url + '/deleteCus/' + doorno,
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
