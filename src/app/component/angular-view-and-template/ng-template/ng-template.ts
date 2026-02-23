import { NgTemplateOutlet, NgIf } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  imports: [NgTemplateOutlet, NgIf],
  templateUrl: './ng-template.html',
  styleUrl: './ng-template.css',
})
export class NgTemplate {
   isLogginPage:WritableSignal<boolean> = signal(true);

   isAdmin:WritableSignal<boolean> = signal(true);

   onclick(){
      this.isLogginPage.update((current)=> !current);
   }

   onChangeBlock(){
    this.isAdmin.set(false);
   }
}
