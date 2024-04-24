import { NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {
constructor(private router : Router){}
listaAlimentosrec : any;
listaAlimentosCompleta : [] | undefined;
nomePesquisa : any;



ngOnInit(){
  const localData = localStorage.getItem('listaAlimentos');
  if(localData != null){
    this.listaAlimentosrec = JSON.parse(localData);
    
    //this.listaAlimentosCompleta = this.listaAlimentosrec;


}



}


detalhes(id : any){
  this.router.navigate(['/diet-detail', id]);
  


}

filtraPct(nomePesquisa: string) {
  this.nomePesquisa = nomePesquisa; // Update search term
  if (!nomePesquisa) {
    this.listaAlimentosrec = this.listaAlimentosCompleta; // Reset to original list if no search term
    return;
  }
  this.listaAlimentosrec = this.listaAlimentosrec.filter((patient: { fullName: string; }) => patient.fullName.toLowerCase().includes(nomePesquisa.toLowerCase()));
}






}


