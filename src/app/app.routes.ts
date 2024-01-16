import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { LoginComponent } from './components/pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent,  title:'Login | LinkedIn'},
  { path: '\home', component: HomeComponent,  title:'Home | LinkedIn'},
  { path: '\profile', component: ProfileComponent, title:'Profile | LinkedIn'},
];
