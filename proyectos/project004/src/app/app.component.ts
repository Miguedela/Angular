import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project004';

  @Input() valor1!: number;
  @Input() valor2!: number;
  @Input() valor3!: number;
  @Input() resultado!: String;

  constructor() {
    this.lanzarDados();
  }

  comprobarResultado() {
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = "Has ganado!!";
    } else {
      this.resultado = " - ";
    }
  }

  generarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  lanzarDados() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
    this.comprobarResultado();
  }
}
