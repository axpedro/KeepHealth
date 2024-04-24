import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HomeComponent, CadastroComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuarioListaObj : any
  constructor(private router: Router) {
    
   }

  inputDoemail ='';
  inputDaSenha ='';
  
usuarios = [{
usuario:"pedro",
senha:"a1b2c4d4"
}]


ngOnInit() {
  
      
  const localData = localStorage.getItem("listaUsuarios");
  if(localData!=null){
  this.usuarioListaObj = JSON.parse(localData);
  
  }
  
}

verifica(){
  const usuarioLista = JSON.parse(localStorage.getItem("listaUsuarios") || '[]');
  if(this.inputDoemail === usuarioLista[0].usuario && this.inputDaSenha === usuarioLista[0].senha){

//alert('login realizado com sucesso')
this.router.navigate(['/home']);
  }
  else 
  alert('Usuário ou senha inválidos')
}
redefineSenha(){
  alert('Sua senha foi alterada para: "a1b2c4d4". Utilize a nova senha para logar')
}

Cadastrar(){
  this.router.navigate(['/cadastro']);
}

}
