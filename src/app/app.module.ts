import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./components/share/menu/menu.component";
import { HeaderComponent } from "./components/header/header.component";
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, HeaderComponent, AboutMeComponent, CaracteristicasComponent, HabilidadesComponent, FooterComponent, ProyectosComponent],
  imports: [BrowserModule,  NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
