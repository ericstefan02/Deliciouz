import { Component, Input, OnInit } from '@angular/core';
import { Chef } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { ReceiptsService } from '../services/receipts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chef-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chef-card.component.html',
  styleUrl: './chef-card.component.css',
})
export class ChefCardComponent implements OnInit {
  receipeId: number = 0;
  @Input() chef: Chef;
  constructor(
    private router: Router,
    private receiptsService: ReceiptsService
  ) {
    this.chef = {} as Chef;
  }
  ngOnInit(): void {
    this.receiptsService
      .getFirstRecipeIdByChefId(this.chef.id)
      .subscribe((id: number | undefined) => {
        if (id) {
          this.receipeId = id;
        }
      });
  }
  handleCardClicked(): void {
    this.router.navigate(['/receipt', this.receipeId]);
  }
}
