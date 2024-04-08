import { Component } from '@angular/core';
import { CmTometersPipe } from '../cm-tometers.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CmTometersPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
listaUsers : any[] = [];
nome = '';
email = '';
peso ='';
altura='120';
usuario='';
idade = 0;




ngOnInit() {
  const usuarioLista = JSON.parse(localStorage.getItem("listaUsuarios") || '[]');
  
  
    this.listaUsers = usuarioLista;
    this.nome = usuarioLista[10][0].usuario || '';
    this.email = usuarioLista[10][0].email || '';
    const datanascimento = usuarioLista[10][0].nasc || ''; //pega a data
    const dataNascimentoDate = new Date(Date.parse(datanascimento)); //transforma a data num "date"
    const hoje = new Date();
    const diferencaAnos = Math.floor((hoje.getTime() - dataNascimentoDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)); //get time transforma em milissegundos
    this.idade = diferencaAnos;
    
  
 
 


}


}
