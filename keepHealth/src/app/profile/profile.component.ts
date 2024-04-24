import { Component, NgModule } from '@angular/core';
import { CmTometersPipe } from '../cm-tometers.pipe';
import { BuscaCepService } from '../services/busca-cep.service';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CmTometersPipe, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [BuscaCepService]
})
export class ProfileComponent {
  constructor(private buscaCep: BuscaCepService, router: RouterModule) {}
  consultaCep(valor: string, form: any) {
    this.buscaCep.get(valor).subscribe((dados) => this.cepData(dados, form));
  }

  cepData(dados: any, form: any) {
    console.log(dados);
    this.AddressForm.patchValue({
      street: dados.logradouro,
      city: dados.localidade,
      state: dados.uf,
      neighborhood: dados.bairro,
      complement: dados.complemento,
    });
  }
  AddressForm: FormGroup = new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    //number: new FormControl(''),
    complement: new FormControl(''),
    neighborhood: new FormControl(''),
    //reference: new FormControl(''),
  });





  listaUsuarioLogado : {} | undefined;
nome = '';
email = '';
peso ='';
altura='120';
//usuario='';
idade = 0;




ngOnInit() {
  const usuarioLista = (localStorage.getItem("listaUsuarios"));
 
      if (usuarioLista != null) {
        const listaUsuarioLogado = JSON.parse(usuarioLista);
        //this.nome = listaUsuarioLogado[0][0].usuario || '';
        this.email = listaUsuarioLogado[0][0].email || '';
        const datanascimento = listaUsuarioLogado[0][0].nasc || ''; //pega a data
        const dataNascimentoDate = new Date(Date.parse(datanascimento)); //transforma a data num "date"
        const hoje = new Date();
        const diferencaAnos = Math.floor((hoje.getTime() - dataNascimentoDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)); //get time transforma em milissegundos
        this.idade = diferencaAnos;





      } else {
        alert('Sem usuário cadastrado')
        //const listaUsuarioLogado = [];
  
    
}






}}
