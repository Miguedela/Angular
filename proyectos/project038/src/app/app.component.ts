import { Component, OnInit } from '@angular/core';

declare var $: any; // Le garantizamos a TypeScript que $ existe

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project038';

  ngOnInit(): void {
    $('[data-bs-toggle="popover"]').popover();
  }

  aceptar() {
    alert("Ha pulsado Aceptar!");
  }

  cancelar() {
    alert("Ha pulsado Cancelar!");
  }
}
