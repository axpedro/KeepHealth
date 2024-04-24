import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Dialog, DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { FormsModule, NgModel } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, FormsModule, ButtonModule, DialogModule, ToastModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [MessageService],
})
export class HomeComponent {
  constructor(private messageService: MessageService){}
  visible: boolean = false;
  
  listaUsuarios: any ;
  ngOnInit(){

    const localData = localStorage.getItem('listaUsuarios');
    if(localData != null){
      this.listaUsuarios = JSON.parse(localData);
      //console.log(this.listaUsuarios)
      
      //this.listaAlimentosCompleta = this.listaAlimentosrec;
  
  
  }

  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}
  showAtividade(){
    this.visible = true;
  }



}
