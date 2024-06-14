import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-receipt-label',
  standalone: true,
  templateUrl: './receipt-label.component.html',
  styleUrls: ['./receipt-label.component.css'],
})
export class ReceiptLabelComponent {
  @Input() type: string;
  @Input() value: string;

  labelMap: {
    [key: string]: { [value: string]: { text: string; bgColor: string } };
  };

  constructor() {
    this.type = '';
    this.value = '';
    this.labelMap = {
      difficulty: {
        Easy: { text: 'Easy', bgColor: 'bg-green-400' },
        Medium: { text: 'Medium', bgColor: 'bg-yellow-400' },
        Hard: { text: 'Hard', bgColor: 'bg-red-400' },
      },
      cuisine: {
        Italian: { text: 'Italian', bgColor: 'bg-green-400' },
        Asian: { text: 'Asian', bgColor: 'bg-yellow-400' },
        American: { text: 'American', bgColor: 'bg-red-400' },
        Mexican: { text: 'Mexican', bgColor: 'bg-orange-400' },
        Mediterranean: { text: 'Mediterranean', bgColor: 'bg-blue-400' },
        Pakistani: { text: 'Pakistani', bgColor: 'bg-amber-400' },
      },
    };
  }
}
