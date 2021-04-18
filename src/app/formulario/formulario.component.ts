import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() resultado = new EventEmitter<number>();
  operandoA:number;
  operandoB:number;
  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
    let suma = this.operandoA+ this.operandoB;
    this.resultado.emit(suma);
  }

}
