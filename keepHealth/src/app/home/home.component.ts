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
  listarecuperada: any[] | undefined;
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
    this.atividades = [
      { name: 'Correr', code: 'correr' },
      { name: 'Academia', code: 'academia' },
      { name: 'Natação', code: 'natacao' },
      { name: 'Caminhada', code: 'caminhada' },
      { name: 'Volei', code: 'volei' },
    ];

    this.listarecuperada = JSON.parse(
      localStorage.getItem('atividades') || '[]'
    );
    console.log('lista rec: ' + this.listarecuperada);
    console.log('lista atividades' + this.listaAtividades);
  }

  showDialog() {
    this.visible = true;
  }

  salvarLocal() {
    const listaAtividadesObj = {
      ativ: this.atividadeSelecionada?.code,
      data: this.date,
    };

    // Verifica se listarecuperada é um array
    if (!Array.isArray(this.listarecuperada)) {
      this.listarecuperada = [];
    }

    this.listarecuperada.push(listaAtividadesObj);
    const ListaAtividadesString = JSON.stringify(this.listarecuperada);
    localStorage.setItem('atividades', ListaAtividadesString);
  }
}
