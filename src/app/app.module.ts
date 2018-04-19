import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuscaClientesComponent } from './busca-clientes/busca-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscaClientesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
