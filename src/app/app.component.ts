import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dafn3';
  intento = 0;
  rechazado= true;

  alternativa = [
    "No",
    "Andale",
    "Por favor",
    "Insisto",
    "Lo pensaré",
    "Casi me convences",
    "Una más",
    "..."
  ];

  columns = [
    "grid-template-columns: 50% 50%;",
    "grid-template-columns: 55% 45%;",
    "grid-template-columns: 65% 35%;",
    "grid-template-columns: 70% 30%;",
    "grid-template-columns: 75% 25%;",
    "grid-template-columns: 80% 20%;",
    "grid-template-columns: 90% 10%;",
    "grid-template-columns: 90% 10%;",
    "grid-template-columns: 100%",
  ];
  

  reaccion(): void {
    this.intento++;
  }

  aceptar(): void {
    this.rechazado = false;
  }
}
