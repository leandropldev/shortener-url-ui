import { Injectable } from '@angular/core';
import { UrlRequestDTO } from '../interfaces/urlRequestDTO';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlResponseDTO } from '../interfaces/urlResponseDTO';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private apiUrl = 'http://localhost:8080/shorten-url';

  constructor(private http: HttpClient) {}

  getShortenedUrl(urlRequest: UrlRequestDTO): Observable<UrlResponseDTO> {
    return this.http
      .post<UrlResponseDTO>(
        this.apiUrl, 
        urlRequest
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
