import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService, Pet } from '../services/mascota.service';


@Component({
  selector: 'app-mascota-tarjeta',
  templateUrl: './mascotaTarjeta.component.html'
})
export class MascotaTarjetaComponent implements OnInit {
  @Input() mascota: Pet;
  user:string;

  constructor( private service: PetService, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => {
      this.user = params['id'];
    });
  }

  ngOnInit() {
  }


  updatePet( id: number, stat: string) {
    this.service.updatePet( this.user, id, stat  );
  }

}