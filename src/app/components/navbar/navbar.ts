import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      import('flowbite')
        .then((m) => {
          if (m.initFlowbite) m.initFlowbite();
        })
        .catch((err) => console.error('Failed to load Flowbite (client-only):', err));
    }
  }
}
