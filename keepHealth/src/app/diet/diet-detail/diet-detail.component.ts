import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DietComponent } from '../diet.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.css'
})
export class DietDetailComponent {
  listaAlimentosrec : any
  detalheAlimento : any
  
  // detalheAlimentos = {
  //   nome : '',
  //   qtdCal: '',
  //   qtdVezes:'',
  //   descricao:'',
  //   imagem:'',
  
  //  } 


constructor(private activeRoute: ActivatedRoute){

}

ngOnInit(){
  
  const localData = localStorage.getItem('listaAlimentos');
if(localData != null){
  this.listaAlimentosrec = JSON.parse(localData);
  

  this.activeRoute.params.subscribe((params) => {
    let id = Number(params['id']);
    
    if (!id) {
      alert('pct nao encontrado');
    } else {
      this.detalheAlimento = this.listaAlimentosrec.find((alimento: any) => alimento.id === id);
      
      
      
      console.log(this.detalheAlimento);
     
    }


    
});

}




}
}