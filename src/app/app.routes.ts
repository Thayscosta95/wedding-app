import { Routes } from '@angular/router';

import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VipComponent } from './vip/vip.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GiftsComponent } from './gifts/gifts.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

export const routes: Routes = [
  { path: 'boasVindas', component: BoasVindasComponent },         // Tela inicial
  { path: 'login', component: LoginComponent },      // Tela de login
  { path: 'home', component: HomeComponent },        // Home pós-login
  { path: 'galeria', component: GalleryComponent },
  { path: 'vip', component: VipComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: 'presentes', component: GiftsComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: '**', redirectTo: '' }                     // Rota coringa para redirecionar caso não exista
];