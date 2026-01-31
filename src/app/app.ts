import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular21-app');

  constructor() {}
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
