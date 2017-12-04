import { Component, OnInit } from '@angular/core';

import { NomeService } from '../app/shared/services/nomes.service'

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})

export class RootComponent implements OnInit {

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
