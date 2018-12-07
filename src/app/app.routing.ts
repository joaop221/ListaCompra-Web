import { Routes } from '@angular/router';

import * as pages from './components/pages';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'prefix',
        component: pages.HomeComponent,
        data: { menu: true, footer: false }
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: pages.LoginComponent,
        data: { menu: false, footer: true }
    },
    {
        path: 'groups',
        pathMatch: 'full',
        component: pages.GroupsComponent,
        data: { menu: true, footer: true }
    }
];
