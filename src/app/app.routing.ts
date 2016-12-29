import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    // {
    //     path: 'system', component: SystemComponent
    // },
    // {
    //     path: '', component: SystemComponent, canActivate: [AuthGuard]
    // },
    {
        path: '**', redirectTo: '/login'
    }
];

export const routing = RouterModule.forRoot(routes, {useHash: true});