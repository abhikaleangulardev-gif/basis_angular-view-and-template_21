import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Header } from "./header/header/header";
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-view-and-template');
}
