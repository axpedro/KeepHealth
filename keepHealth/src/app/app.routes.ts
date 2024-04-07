import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

export const routes: Routes = [
{
path: 'login',
component: LoginComponent
},{

    path: 'home',
    component: HomeComponent
},
{
    path:'cadastro',
    component: CadastroComponent
},





];
