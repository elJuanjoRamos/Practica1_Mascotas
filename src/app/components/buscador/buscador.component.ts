import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../services/mascota.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  mascotas: any[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute,
              private mascotaService: PetService ) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['id'];
      //this.mascotas = this.mascotaService.buscarMascota( params['id'] ) ;
    } );
  }


}
