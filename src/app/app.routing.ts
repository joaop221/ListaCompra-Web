import { Routes } from '@angular/router';

import * as pages from './components/pages';
import * as guards from './guards';

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
    }
]
