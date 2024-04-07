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
  const  AlimentosParse = JSON.parse(localStorage.getItem("listaAlimentos") || '[]');
  if(AlimentosParse[0] == null){
    const Alimentos =[{
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
    }
    ];
     AlimentosParse.push(Alimentos);
     const ListaAlimentosString = JSON.stringify(AlimentosParse)
     localStorage.setItem("listaAlimentos", ListaAlimentosString);
    
    
      }

  }
  

 

}
