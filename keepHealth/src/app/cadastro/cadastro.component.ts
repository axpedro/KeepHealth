import { Component, NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [LoginComponent, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
constructor(private router: Router){

}

login = {
nome:'',
email:'',
dataNasc:'',
senha:'',
ConfirmaSenha:''


}

  Cadastro(){
    const usuarioLista = JSON.parse(localStorage.getItem("listaUsuarios") || '[]');
    const usuariosString = [{
      usuario: this.login.nome,
      senha:this.login.senha,
      email:this.login.email,
      nasc:this.login.dataNasc
      }]
      usuarioLista.push(usuariosString);
    if(this.login.senha !== this.login.ConfirmaSenha){
       alert('as senhas devem ser iguais');
     }
     else if(this.login.nome === '' || this.login.email === '' || this.login.dataNasc === ''){
       alert('preencha todos os campos');
     }
     else{
       alert('cadastro ok');
       this.router.navigate(['/login']);
       const ListausuariosString = JSON.stringify(usuarioLista)
       localStorage.setItem("listaUsuarios", ListausuariosString);

     }

    
    

  }
 
  
  
  Voltar(){
    this.router.navigate(['/login']);
  }

}
