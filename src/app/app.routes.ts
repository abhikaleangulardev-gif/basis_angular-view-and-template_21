import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'view-encapsulation',
        pathMatch: 'full'
    },
    {
        path: 'view-encapsulation',
        loadComponent: () =>
            import('./component/angular-view-and-template/view-encapsulation/view-encapsulation')
                .then(m => m.ViewEncapsulation)
    },

    {
        path: 'ng-template',
        loadComponent: () =>
            import('./component/angular-view-and-template/ng-template/ng-template')
                .then(m => m.NgTemplate)
    },

    {
        path: 'ng-content',
        loadComponent: () =>
            import('./component/angular-view-and-template/ng-content/ng-content')
                .then(m => m.NgContent)
    },

    {
        path: 'ng-container',
        loadComponent: () =>
            import('./component/angular-view-and-template/ng-container/ng-container')
                .then(m => m.NgContainer)
    },

    {
        path: 'ng-template-outlet',
        loadComponent: () =>
            import('./component/angular-view-and-template/ng-template-outlet/ng-template-outlet')
                .then(m => m.NgTemplateOutlet)
    },

    {
        path: 'element-ref',
        loadComponent: () =>
            import('./component/angular-view-and-template/element-ref/element-ref')
                .then(m => m.ElementRef)
    },

    {
        path: 'template-ref',
        loadComponent: () =>
            import('./component/angular-view-and-template/template-ref/template-ref')
                .then(m => m.TemplateRef)
    },

    {
        path: 'view-container-ref',
        loadComponent: () =>
            import('./component/angular-view-and-template/view-container-ref/view-container-ref')
                .then(m => m.ViewContainerRef)
    },

    {
        path: 'component-view',
        loadComponent: () =>
            import('./component/angular-view-and-template/component-view/component-view')
                .then(m => m.ComponentView)
    },

    {
        path: 'host-view',
        loadComponent: () =>
            import('./component/angular-view-and-template/host-view/host-view')
                .then(m => m.HostView)
    },

    {
        path: 'embedded-view',
        loadComponent: () =>
            import('./component/angular-view-and-template/embedded-view/embedded-view')
                .then(m => m.EmbeddedView)
    },
    // wildcard route
    {
        path: '**',
        redirectTo: 'view-encapsulation'
    }
];
