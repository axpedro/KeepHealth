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
  listaUsuarioLogado : {} | undefined;
nome = '';
email = '';
peso ='';
altura='120';
usuario='';
idade = 0;




ngOnInit() {
  const usuarioLista = (localStorage.getItem("listaUsuarios"));
 
      if (usuarioLista != null) {
        const listaUsuarioLogado = JSON.parse(usuarioLista);
        this.nome = listaUsuarioLogado[0][0].usuario || '';
        this.email = listaUsuarioLogado[0][0].email || '';
        const datanascimento = listaUsuarioLogado[0][0].nasc || ''; //pega a data
        const dataNascimentoDate = new Date(Date.parse(datanascimento)); //transforma a data num "date"
        const hoje = new Date();
        const diferencaAnos = Math.floor((hoje.getTime() - dataNascimentoDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)); //get time transforma em milissegundos
        this.idade = diferencaAnos;





      } else {
        alert('Sem usuário cadastrado')
        const listaUsuarioLogado = [];
  
    
   
    
  
 
 


}


}}
