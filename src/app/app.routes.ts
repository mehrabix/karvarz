import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'login'
    },
    {
        path: 'login',
        component: LoginComponent
    },

];
