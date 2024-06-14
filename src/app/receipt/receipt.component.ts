import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Receipt } from '../../../interfaces';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ReceiptsService } from '../services/receipts.service';
import { ActivatedRoute } from '@angular/router';
import { ReceiptLabelComponent } from '../receipt-label/receipt-label.component';
import { ionStar, ionTime, ionRestaurant } from '@ng-icons/ionicons';
@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [NgIconComponent, ReceiptLabelComponent, CommonModule],
  providers: [provideIcons({ ionStar, ionTime, ionRestaurant })],
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css',
})
export class ReceiptComponent implements OnInit {
  receipt: Receipt | undefined = undefined;
  constructor(
    private route: ActivatedRoute,
    private receiptService: ReceiptsService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.receiptService
      .getReceiptById(parseInt(id as string))
      .subscribe((receipt) => {
        this.receipt = receipt;
        console.log(this.receipt);
      });
  }
}
