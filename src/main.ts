import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { appRoutes } from './app-routes';
import { provideRouter, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(appRoutes)],
});
