import { Component, OnInit } from '@angular/core';

import { NomeService } from './../../services/nomes.service'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {

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
