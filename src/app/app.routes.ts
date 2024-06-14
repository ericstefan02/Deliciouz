import { Routes } from '@angular/router';
import { ReceiptsComponent } from './receipts/receipts.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ChefsComponent } from './chefs/chefs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'receipts', component: ReceiptsComponent },
  { path: 'receipt/:id', component: ReceiptComponent },
  { path: 'chefs', component: ChefsComponent },
  { path: '', redirectTo: '/receipts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
