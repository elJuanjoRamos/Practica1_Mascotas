import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService, Pet } from '../services/mascota.service';
import { Ayuda } from '../services/auxiliar';

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

  constructor(private mascotasService: PetService, private activatedRoute: ActivatedRoute, private ayuda: Ayuda) {
    this.validar = false;
    this.activatedRoute.params.subscribe( params => {
      this.user = params['id'];
      ayuda.cearUsuario();
      ayuda.setUsuario(this.user);
      this.mascotas = this.mascotasService.getMascotas( ayuda.getUsuario() );
    });
    if (this.mascotas.length > 0) {
      this.validar = true;
    }

  }

  ngOnInit() {
  }

  //Insertar mascotas
  nuevaMascota(nombre: string, pet: string) {
      this.mascotasService.insertMascota(this.ayuda.getUsuario(), pet, nombre);
      this.updatePetsList(this.ayuda.getUsuario());
      this.timeout();
  }




//bajar vida
  timeout() {
    setTimeout(() => {
        this.mascotasService.discountDog(this.ayuda.getUsuario());
        this.mascotasService.discountCat(this.ayuda.getUsuario());
        this.mascotasService.discountBird(this.ayuda.getUsuario());
        this.timeout();
    }, 6000);
}

//actuaizar lista
  updatePetsList(name: string) {
    this.activatedRoute.params.subscribe( params => {
      this.mascotas = this.mascotasService.getMascotas( name );
    });
    this.validar = true;
  }

}
