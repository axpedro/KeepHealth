import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listaUsuarios: any ;
  ngOnInit(){

    const localData = localStorage.getItem('listaUsuarios');
    if(localData != null){
      this.listaUsuarios = JSON.parse(localData);
      //console.log(this.listaUsuarios)
      
      //this.listaAlimentosCompleta = this.listaAlimentosrec;
  
  
  }

  }

}
