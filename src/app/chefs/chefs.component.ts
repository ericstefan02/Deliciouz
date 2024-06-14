import { Component, OnInit } from '@angular/core';
import { ChefsService } from '../services/chefs.service';
import { Chef, ChefResponse } from '../../../interfaces';
import { Router } from '@angular/router';
import { ChefCardComponent } from '../chef-card/chef-card.component';

@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [ChefCardComponent],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css',
})
export class ChefsComponent implements OnInit {
  chefs: Chef[] = [];
  constructor(private router: Router, private chefsService: ChefsService) {}
  ngOnInit(): void {
    this.chefsService.getChefs().subscribe((chefs: ChefResponse) => {
      this.chefs = chefs.chefs;
      console.log(chefs);
    });
  }
}
