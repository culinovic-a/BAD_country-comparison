import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.apiUrl}`;
  }

  // GET COUNTRIES
  getCountries(): Observable<Country> {
    return this.http.get<Country>(this.api).pipe(retry(3),
      catchError(this.handleError)
    );
  }

  // GET ERRORS
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError(
      'Something bad happened; please try again later.');
  }
}
