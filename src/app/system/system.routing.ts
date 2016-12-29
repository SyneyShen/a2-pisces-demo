import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';
import { HomeComponent } from './home/home.component';
import { StandardComponent } from './standard/standard.component';
import { WordsexamComponent } from './wordsexam/wordsexam.component';
import { IeltsexamComponent } from './ieltsexam/ieltsexam.component';
import { AuthGuard } from '../guard/auth.guard';

export const systemRoutes : Routes = [
    {
        path: '',
        redirectTo: '/system',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'system',
        component: SystemComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'home',
                component: HomeComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'standard',
                component: StandardComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'wordsexam',
                component: WordsexamComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'ieltsexam',
                component: IeltsexamComponent,
                canActivate: [AuthGuard]
            }
        ],
        canActivate: [AuthGuard]
    }
];

export const routing = RouterModule.forChild(systemRoutes);