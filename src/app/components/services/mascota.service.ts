import { Injectable } from '@angular/core';

@Injectable()
export class PetService {

    private userPets: PetsUser[] = [];
    private mascotas: Pet[] = [];


    constructor() {
    }
    getMascotas(user: string): Pet[] {
        this.mascotas = [];
        for(let m = 0; m<this.userPets.length; m++){
            var petU: PetsUser = this.userPets[m];
            if(petU.user === user) {
                this.mascotas.push(petU.pets);
            }
        }
        return this.mascotas;
    }

    insertMascota(username: string, pet: string, petname: string) {
        var newPet: Pet;
        if(pet === "dog") {
            newPet = {
                name: petname,
                type: 'Dog',
                img: "assets/img/perro.jpg",
                health: 100,
                happiness: 100,
                hygiene: 100
            };
        } else if( pet === "cat") {
            newPet = {
                name: petname,
                type: 'Cat',
                img: "assets/img/gato.jpg",
                health: 100,
                happiness: 100,
                hygiene: 100
            };
        } else {
            newPet = {
                name: petname,
                type: 'Bird',
                img: "assets/img/bird.jpg",
                health: 100,
                happiness: 100,
                hygiene: 100
            };
        }
        var petuser: PetsUser = {
            user: username,
            pets: newPet
        };

        this.userPets.push(petuser);
    }


    updateDog(user: string){
        this.mascotas = [];
        this.userPets.forEach(e => {
            if (e.user === user ) {
                if( e.pets.type === "Dog" && (e.pets.happiness != 0 )
                && e.pets.health != 0 && e.pets.hygiene != 0) {
                    e.pets.health = e.pets.health - 5;
                    e.pets.happiness = e.pets.happiness - 5;
                    e.pets.hygiene = e.pets.hygiene - 5;
                    //metodo para cambiar la imagen 
                    if( e.pets.health <= 60  ) {
                        e.pets.img ="assets/img/perro3.jpg";
                    } 
                    this.mascotas.map((todo, i) => {
                        if ( todo.type === "Dog") {
                            this.mascotas[i] = e.pets;
                        }
                    });
                }

            }
        });
    }
    updateCat(user: string){
        this.mascotas = [];
        this.userPets.forEach(e => {
            if (e.user === user ) {
                if( e.pets.type === "Cat" && (e.pets.happiness != 0 )
                && e.pets.health != 0 && e.pets.hygiene != 0) {
                    e.pets.health = e.pets.health - 5;
                    e.pets.happiness = e.pets.happiness - 5;
                    e.pets.hygiene = e.pets.hygiene - 5;
                    //metodo para cambiar la imagen 
                    if( e.pets.health <= 60  ) {
                        e.pets.img ="assets/img/gato2.jpg";
                    } 
                    this.mascotas.map((todo, i) => {
                        if ( todo.type === "Cat") {
                            this.mascotas[i] = e.pets;
                        }
                    });
                }

            }
        });
    }

}

export interface Pet {
    name: string;
    type: string;
    img: string;
    health: number;
    happiness: number;
    hygiene: number;
};

export interface PetsUser {
    user: string;
    pets: Pet
}
