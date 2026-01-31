import { Routes } from '@angular/router';
import { MainComponent } from './index/main/main.component';
import { RegisterComponent }  from './auth/register/register.component';
import { LoginComponent }  from './auth/login/login.component';


export const routes: Routes = [
	{
        path: '',
        component: MainComponent
	},
	{
        path: 'auth/register',
        component: RegisterComponent
	},
	{
        path: 'auth/login',
        component: LoginComponent
	}
];
