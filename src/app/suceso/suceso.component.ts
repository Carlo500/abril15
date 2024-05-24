import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-suceso',
  standalone: true,
  imports: [],
  templateUrl: './suceso.component.html',
  styleUrl: './suceso.component.css'
})
export class SucesoComponent {
  @Input() suceso: any;
  @Output() cerrar= new EventEmitter<void>();
}
