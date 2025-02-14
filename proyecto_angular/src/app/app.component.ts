import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto_angular';
  nombre = 'Miguel Ángel de la Rosa Leva'
  edad = '21'
  altura = '183'
  puesto = 'programador'
  adulto = true;

  puestoTrabajo() {
    return this.puesto;
  }

  esAdulto() {
    return this.adulto ? 'Es adulto' : 'No es adulto';
  }
}
