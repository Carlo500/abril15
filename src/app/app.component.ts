import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ts01Component } from './ts01/ts01.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Ts01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abril15';
}
