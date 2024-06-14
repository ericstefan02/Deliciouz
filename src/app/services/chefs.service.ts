import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChefResponse } from '../../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChefsService {
  constructor(private http: HttpClient) {}

  getChefs(): Observable<ChefResponse> {
    return this.http.get<ChefResponse>('/assets/data/chefs.json');
  }
}
