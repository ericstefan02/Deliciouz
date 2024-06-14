import { Component, OnInit } from '@angular/core';
import { ReceiptsService } from '../services/receipts.service';
import { ReceiptsResponse } from '../../../interfaces';
import { Receipt } from '../../../interfaces';
import { Router } from '@angular/router';
import { ReceiptCardComponent } from '../receipt-card/receipt-card.component';

@Component({
  selector: 'app-receipts',
  standalone: true,
  imports: [ReceiptCardComponent],
  templateUrl: './receipts.component.html',
  styleUrl: './receipts.component.css',
})
export class ReceiptsComponent implements OnInit {
  receipts: Receipt[] = [];
  constructor(
    private router: Router,
    private receiptService: ReceiptsService
  ) {}
  ngOnInit(): void {
    this.receiptService
      .getReceipts()
      .subscribe((receipts: ReceiptsResponse) => {
        this.receipts = receipts.recipes;
      });
  }
  navigateToReceiptDetail(id: number): void {
    this.router.navigate(['/receipt', id]);
  }
}
