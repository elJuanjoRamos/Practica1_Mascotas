import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService, Pet } from '../services/mascota.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styles: []
})
export class MascotasComponent implements OnInit {
  //variables globales
  mascotas: Pet[] = [];
  validar:boolean = true;
  user: string;
  
  constructor(private mascotasService: PetService, private activatedRoute: ActivatedRoute,) {
    this.validar = false;
    this.activatedRoute.params.subscribe( params => {
      this.user = params['id'];
      this.mascotas = mascotasService.getMascotas( this.user );
    });
    if (this.mascotas.length > 0) {
      this.validar = true;
    }

  }

  ngOnInit() {
  }

  nuevaMascota(nombre:string, pet: string) {
      this.mascotasService.insertMascota(this.user, pet, nombre);
      this.updatePetsList(this.user);
      this.timeout();
  }





  timeout() {
    setTimeout(() => {
        this.mascotasService.updateDog(this.user);
        this.mascotasService.updateCat(this.user);
        this.timeout();
    }, 5000);
}











  updatePetsList(name: string) {
    this.activatedRoute.params.subscribe( params => {
      this.mascotas = this.mascotasService.getMascotas( name );
    });

    

    this.validar = true;
  }
}
