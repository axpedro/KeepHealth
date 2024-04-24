import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(private httpCliente : HttpClient) { }



  get(cep : string){

    const url = `https://viacep.com.br/ws/${cep}/json`; 
    return this.httpCliente.get(url); 
  }
}
