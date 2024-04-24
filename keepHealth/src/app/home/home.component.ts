import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Dialog, DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule, NgModel } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';

interface Atividade {
  name: string;
  code: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LoginComponent,
    FormsModule,
    ButtonModule,
    ToastModule,
    CommonModule,
    DropdownModule,
    DialogModule,
    CalendarModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  visible: boolean = false;
  date: Date | undefined;
  listaUsuarios: any;

  atividades: Atividade[] | undefined;
  listaAtividades:
    | [
        {
          ativ: '';
          data: '';
        }
      ]
    | undefined;
  atividadeSelecionada: Atividade | undefined;

  ngOnInit() {
    const localData = localStorage.getItem('listaUsuarios');
    if (localData != null) {
      this.listaUsuarios = JSON.parse(localData);
      //console.log(this.listaUsuarios)

      //this.listaAlimentosCompleta = this.listaAlimentosrec;
    }

    this.atividades = [
      { name: 'Correr', code: 'correr' },
      { name: 'Academia', code: 'academia' },
      { name: 'Natação', code: 'natacao' },
      { name: 'Caminhada', code: 'caminhada' },
      { name: 'Volei', code: 'volei' },
    ];
  }

  showDialog() {
    this.visible = true;
  }
  salvarLocal() {
    console.log(this.atividadeSelecionada);
    const listaAtividadesObj = {
      ativ: this.atividadeSelecionada?.code,
      data: this.date,
    };
    const ListaAtividadesString = JSON.stringify(listaAtividadesObj);
    localStorage.setItem('atividades', ListaAtividadesString);
  }
}
