import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TiboaAdmComponent } from './tiboa-adm/tiboa-adm.component';
import { TiboaGameComponent } from './tiboa-game/tiboa-game.component';
import { CadastroSummonerComponent } from './cadastro-summoner/cadastro-summoner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    TiboaAdmComponent,
    TiboaGameComponent,
    CadastroSummonerComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
