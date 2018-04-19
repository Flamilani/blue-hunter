import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BuscaClientesComponent } from './busca-clientes/busca-clientes.component';

const routes: Routes = [
  { path: 'clientes', component: BuscaClientesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BuscaClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
