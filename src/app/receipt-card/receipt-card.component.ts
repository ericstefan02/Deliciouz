import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionStar, ionFlame } from '@ng-icons/ionicons';
import { Receipt } from '../../../interfaces';
import { ReceiptLabelComponent } from '../receipt-label/receipt-label.component';
@Component({
  selector: 'app-receipt-card',
  standalone: true,
  imports: [NgIconComponent, ReceiptLabelComponent],
  providers: [provideIcons({ ionStar, ionFlame })],
  templateUrl: './receipt-card.component.html',
  styleUrl: './receipt-card.component.css',
})
export class ReceiptCardComponent {
  @Input() receipt: Receipt;
  constructor() {
    this.receipt = {} as Receipt;
  }
}
