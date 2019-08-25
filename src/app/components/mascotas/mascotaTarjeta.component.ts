import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mascota-tarjeta',
  templateUrl: './mascotaTarjeta.component.html'
})
export class MascotaTarjetaComponent implements OnInit {
  @Input() mascota: any = { } ;
  @Output() mascotaSeleccionado: EventEmitter<number>;

  constructor(private router: Router ) {
    this.mascotaSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }
}