import { Component, OnInit } from '@angular/core';

import { NomeService } from './shared/services/nomes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nomes = [];

  constructor(private nomeService: NomeService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.nomeService.consultar()
      .then(dados => {
        this.nomes = dados;
      })
  }
}
