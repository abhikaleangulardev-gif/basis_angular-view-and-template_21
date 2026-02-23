import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-header',
  imports: [CommonModule, MenubarModule,],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  items: any[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Ng Template', routerLink: '/ng-template', routerLinkActiveOptions: { exact: true }  },
      { label: 'Ng Content', routerLink: '/ng-content' },
      { label: 'Ng Container', routerLink: '/ng-container' },
      { label: 'Ng Template Outlet', routerLink: '/ng-template-outlet' },
      { label: 'ElementRef', routerLink: '/element-ref' },
      { label: 'TemplateRef', routerLink: '/template-ref' },
      { label: 'ViewContainerRef', routerLink: '/view-container-ref' },
      { label: 'Component View', routerLink: '/component-view' },
      { label: 'Host View', routerLink: '/host-view' },
      { label: 'Embedded View', routerLink: '/embedded-view' }
    ];
  }


}
