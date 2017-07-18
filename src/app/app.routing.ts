import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TiboaGameComponent } from './tiboa-game/tiboa-game.component';
import { TiboaAdmComponent } from './tiboa-adm/tiboa-adm.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES:Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'tiboa-adm', component: TiboaAdmComponent },
    { path: 'tiboa-game', component: TiboaGameComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);