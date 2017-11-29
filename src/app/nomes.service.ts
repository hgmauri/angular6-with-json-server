import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NomeService {

    constructor(private http: Http) { }

    consultar(): Promise<any> {
        return this.http.get('http://localhost:3000/nomes')
          .toPromise()
          .then(response => response.json());
      }
}
