import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  imports: [],
  templateUrl: './ng-container.html',
  styleUrl: './ng-container.css',
})
export class NgContainer {
  isActive: WritableSignal<boolean> = signal(false);

  students = [
    "Rahul",
    "Amit",
    "Sneha",
    "Pooja"
  ];

  onClick() {
    // this.isActive.set(true);
    this.isActive.update((current) => !current);
  }
}
