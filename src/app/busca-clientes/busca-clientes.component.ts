import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-clientes',
  templateUrl: './busca-clientes.component.html',
  styleUrls: ['./busca-clientes.component.less']
})
export class BuscaClientesComponent implements OnInit {
  clientes = 'Busca de Clientes';

  constructor() { }

  ngOnInit() {
  }

}
