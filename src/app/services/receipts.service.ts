import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReceiptsResponse } from '../../../interfaces';
import { Observable, map } from 'rxjs';
import { Receipt } from '../../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ReceiptsService {
  constructor(private http: HttpClient) {}

  getReceipts(): Observable<ReceiptsResponse> {
    return this.http.get<ReceiptsResponse>('/assets/data/receipts.json');
  }
  getReceiptById(id: number): Observable<Receipt | undefined> {
    return this.getReceipts().pipe(
      map((response) => response.recipes.find((receipt) => receipt.id === id))
    );
  }
  getFirstRecipeIdByChefId(chefId: number): Observable<number | undefined> {
    return this.getReceipts().pipe(
      map((response: ReceiptsResponse) => {
        const recipe = response.recipes.find(
          (receipt: Receipt) => receipt.userId === chefId
        );
        return recipe ? recipe.id : undefined;
      })
    );
  }
}
