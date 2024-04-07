import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { DietComponent } from './diet/diet.component';
import { DietDetailComponent } from './diet-detail/diet-detail.component';
import { ProfileComponent } from './profile/profile.component';

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
{
    path:'diet',
    component: DietComponent
},{
    path:'diet-detail',
    component: DietDetailComponent
},{
    path:'profile',
    component: ProfileComponent
},




];
