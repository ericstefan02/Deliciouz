import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionLogoInstagram,
  ionLogoTwitter,
  ionLogoFacebook,
} from '@ng-icons/ionicons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({ ionLogoInstagram, ionLogoTwitter, ionLogoFacebook }),
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
