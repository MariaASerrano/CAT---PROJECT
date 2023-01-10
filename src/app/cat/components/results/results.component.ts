import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {

  constructor () { }

  ngOnInit(): void {
  }

  mostrarCIS=true;
  mostrarNIST=false;
  mostrarDBIR=false;
  mostrarPlan=false;
  mostrarHCR=false;
  mostrarRRA=false;

  showCIS(){
    this.mostrarCIS=true;
    this.mostrarNIST=false;
    this.mostrarDBIR=false;
    this.mostrarPlan=false;
    this.mostrarHCR=false;
    this.mostrarRRA=false;
  }

  showNIST(){
    this.mostrarCIS=false;
    this.mostrarNIST=true;
    this.mostrarDBIR=false;
    this.mostrarPlan=false;
    this.mostrarHCR=false;
    this.mostrarRRA=false;
  }

  showDBIR(){
    this.mostrarCIS=false;
    this.mostrarNIST=false;
    this.mostrarDBIR=true;
    this.mostrarPlan=false;
    this.mostrarHCR=false;
    this.mostrarRRA=false;
  }

  showPlan(){
    this.mostrarCIS=false;
    this.mostrarNIST=false;
    this.mostrarDBIR=false;
    this.mostrarPlan=true;
    this.mostrarHCR=false;
    this.mostrarRRA=false;
  }
  showHCR(){
    this.mostrarCIS=false;
    this.mostrarNIST=false;
    this.mostrarDBIR=false;
    this.mostrarPlan=false;
    this.mostrarHCR=true;
    this.mostrarRRA=false;
  }

  showRRA(){
    this.mostrarCIS=false;
    this.mostrarNIST=false;
    this.mostrarDBIR=false;
    this.mostrarPlan=false;
    this.mostrarHCR=false;
    this.mostrarRRA=true;
  }
  
}
