import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto_angular';
  nombre = 'Miguel Ángel de la Rosa Leva';
  edad = 18;
  altura = 183;
  puesto = 'programador';
  adulto = true;

  sueldos = [1400, 1300, 1200, 1100];
  provincias = [
    { id: '0', nombre: 'Sevilla' },
    { id: '1', nombre: 'Cádiz' },
    { id: '2', nombre: 'Málaga' },
    { id: '3', nombre: 'Córdoba' }
  ];

  esAdulto() {
    return this.adulto ? 'Es adulto' : 'No es adulto';
  }

  // eventos
  diHola() {
    alert("Hola amigo!");
  }

  valor = 0;

  decrementar() {
    this.valor--;
  }

  incrementar() {
    this.valor++;
  }
}
