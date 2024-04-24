import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router){

  }
  Inicio(){
    this.router.navigate(['/home']);
  }
  Dietas(){
    this.router.navigate(['/diet']);
  }
  Perfil(){
    this.router.navigate(['/profile']);
  }




  ngOnInit() {
    
  //let  AlimentosParse = JSON.parse(localStorage.getItem("listaAlimentos") || '[]');
   let Alimentos =[{
      id: 1,
      name: "Abacate",
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: ""
    },{
      id: 2,
      name: "Banana",
      description: "amarelo",
      qttCalories: 5,
      qttDaysFeed: 1,
      imageLink: ""
    },{
      id: 3,
      name: "Abacate",
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: ""
    },{
      id: 4,
      name: "Maça",
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: ""
    },{
      id: 5,
      name: "laranja",
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: ""
    },{
      id: 6,
      name: "uva",
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: ""
    },{
      id: 7,
      name: "melancia",
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: ""
    },{
      id: 8,
      name: "macarrao",
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: ""
    },{
      id: 9,
      name: "arroz",
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: ""
    },{
      id: 10,
      name: "feijao",
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: ""
    },
  ];
    //const AlimentosParse.push(Alimentos);
    const AlimentosString = JSON.stringify(Alimentos)
      localStorage.setItem("listaAlimentos", AlimentosString);
    
    
      }

  }
  

 


