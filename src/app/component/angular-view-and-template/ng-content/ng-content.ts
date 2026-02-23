import { Component } from '@angular/core';
import { Child } from "./child/child";

@Component({
  selector: 'app-ng-content',
  imports: [Child],
  templateUrl: './ng-content.html',
  styleUrl: './ng-content.css',
})
export class NgContent {

}
