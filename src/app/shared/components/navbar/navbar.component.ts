import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  links: Link[] = [
    { displayName: 'Home', path: '/' },
    { displayName: 'Contact', path: '/contact' },
    { displayName: 'Feed', path: '/feed' },
    { displayName: 'Profile', path: '/profile' },
  ];

  title: string = 'BlogNest';
}

type Link = {
  displayName: string;
  path: string;
};
