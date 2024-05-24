import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  generos=['mujer', 'Hombre', 'Otro'];
  generoS:String='';
  nacionalidades=['Española', 'Portuguesa', 'Inglesa']
  nacionalidadS:String='';
  lenguajes=['C++','Phyton','Java','JS'];
  lenguajeS:String='';
  respuesta:String='';
  mostrar2():void{
    this.respuesta=' Genero: '+this.generoS+' Nacionalidad: '+this.nacionalidadS+' Lenguajes: '+this.lenguajeS;
  }
}
