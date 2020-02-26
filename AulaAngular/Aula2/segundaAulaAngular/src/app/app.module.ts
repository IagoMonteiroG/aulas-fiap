import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniaturaComponent } from './miniatura/miniatura.component';
import { SegundaAulaComponent } from './segunda-aula/segunda-aula.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniaturaComponent,
    SegundaAulaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
