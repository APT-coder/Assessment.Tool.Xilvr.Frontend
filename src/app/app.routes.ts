import { Route } from '@angular/router';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';
import { LoginComponent } from './features/login/login.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: AppLayoutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
