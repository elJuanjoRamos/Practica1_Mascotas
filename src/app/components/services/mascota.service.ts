import { Injectable } from '@angular/core';

@Injectable()
export class PetService {

    private userPets: PetsUser[] = [];
    private mascotas: Pet[] = [];
    private idMascota: number = 0 ;

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
        this.idMascota = this.idMascota + 1;
        var newPet: Pet;
        if(pet === "dog") {
            newPet = {
                id: this.idMascota,
                name: petname,
                type: 'Dog',
                img: "assets/img/perro.jpg",
                health: 100,
                happiness: 100,
                hygiene: 100
            };
        } else if( pet === "cat") {
            newPet = {
                id: this.idMascota,
                name: petname,
                type: 'Cat',
                img: "assets/img/gato.jpg",
                health: 100,
                happiness: 100,
                hygiene: 100
            };
        } else {
            newPet = {
                id: this.idMascota,
                name: petname,
                type: 'Bird',
                img: "assets/img/bird1.jpg",
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

    //Metodos para bajar vida
    discountDog(user: string){
        this.mascotas = [];

        for ( let m = 0; m < this.userPets.length; m++ ) {
            var e: PetsUser = this.userPets[m];

            if ( e.user === user ) {
                console.log("esta entrando");
                if ( e.pets.type === "Dog") {

                    if ( e.pets.happiness !== 0  ) { e.pets.happiness = e.pets.happiness - 5; }
                    if ( e.pets.health !== 0 ) {  e.pets.health = e.pets.health - 5; }
                    if ( e.pets.hygiene !== 0 ) { e.pets.hygiene = e.pets.hygiene - 5; }
                    //metodo para cambiar la imagen 
                    if ( e.pets.health <= 60 && e.pets.hygiene <= 60 && e.pets.happiness <= 60  ) {
                        e.pets.img ="assets/img/perro3.jpg";
                    }
                    this.mascotas.map((todo, i) => {
                        if ( todo.type === "Dog") {
                            this.mascotas[i] = e.pets;
                        }
                    });
                }
            }
        }
    }
    discountCat(user: string){
        this.mascotas = [];
        this.userPets.forEach(e => {
            if (e.user === user ) {
                if( e.pets.type === "Cat") {

                    if ( e.pets.health !== 0 ) {
                        e.pets.health = e.pets.health - 5;
                        if ( e.pets.health < 0 ) { e.pets.health = 0;}
                    }
                    if ( e.pets.happiness !== 0  ) { 
                        e.pets.happiness = e.pets.happiness - 5;
                        if ( e.pets.happiness < 0 ) { e.pets.happiness = 0;}
                    }
                    if ( e.pets.hygiene !== 0 ) {
                        e.pets.hygiene = e.pets.hygiene - 5;
                        if ( e.pets.hygiene < 0 ) { e.pets.hygiene = 0;}
                    }
                    //metodo para cambiar la imagen 
                    if( e.pets.health <= 60 && e.pets.hygiene <= 60 && e.pets.happiness <= 60   ) {
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

    discountBird(user: string){
        console.log("el user es " + user);
        this.mascotas = [];
        this.userPets.forEach(e => {
            if (e.user === user ) {
                if( e.pets.type === "Bird") {
                    if ( e.pets.happiness !== 0  ) { 
                        e.pets.happiness = e.pets.happiness - 5;
                        if ( e.pets.happiness < 0 ) { e.pets.happiness = 0;}
                    }
                    if ( e.pets.health !== 0 ) {
                        e.pets.health = e.pets.health - 5;
                        if ( e.pets.health < 0 ) { e.pets.health = 0;}
                     }
                    if ( e.pets.hygiene !== 0 ) {
                        e.pets.hygiene = e.pets.hygiene - 5;
                        if ( e.pets.hygiene < 0 ) { e.pets.hygiene = 0;}
                    }
                    //metodo para cambiar la imagen 
                    if( e.pets.health <= 60 && e.pets.hygiene <= 60 && e.pets.happiness <= 60   ) {
                        e.pets.img ="assets/img/bird2.jpg";
                    } 
                    this.mascotas.map((todo, i) => {
                        if ( todo.type === "Bird") {
                            this.mascotas[i] = e.pets;
                        }
                    });
                }

            }
        });
    }

    updatePet(user: string, id: number, stat: string) {
        this.mascotas = [];
        this.userPets.forEach(e => {
            if (e.user === user ) {
                if ( e.pets.id ===  id) {
                    var petTemp: Pet = e.pets;
                    if ( petTemp.type === "Dog" ) {
                        if ( stat === "health" ) {
                            petTemp.health += 5;
                        } else if (stat === "happiness") {
                            petTemp.happiness += 5;
                        } else {
                            petTemp.hygiene += 5;
                        }

                        if ( petTemp.health > 60 && petTemp.happiness > 60 && petTemp.hygiene > 60 ) {
                            petTemp.img ="assets/img/perro.jpg";
                        }
                    }
                    if ( petTemp.type === "Cat" ) {
                        if ( stat === "health" ) {
                            petTemp.health += 6;
                        } else if (stat === "happiness") {
                            petTemp.happiness += 2;
                        } else {
                            petTemp.hygiene += 1;
                        }

                        if (petTemp.health > 60 && petTemp.happiness > 60 && petTemp.hygiene > 60) {
                            petTemp.img ="assets/img/gato.jpg";
                        }
                    }
                    if ( petTemp.type === "Bird" ) {
                        if ( stat === "health" ) {
                                petTemp.health += 5;
                        } else if (stat === "happiness") {
                            petTemp.happiness += 4;
                        } else {
                                petTemp.hygiene += 3;
                        }

                        if (petTemp.health > 60 && petTemp.happiness > 60 && petTemp.hygiene > 60) {
                            petTemp.img ="assets/img/bird1.jpg";
                        }
                    }
                    if (petTemp.health >= 100) {
                        petTemp.health = 100;
                    }
                    if (petTemp.happiness >= 100) {
                        petTemp.happiness = 100;
                    }
                    if (petTemp.hygiene >= 100) {
                        petTemp.hygiene = 100;
                    }
                    this.mascotas.map((todo, i) => {
                        if ( todo.id === id) {
                            this.mascotas[i] = e.pets;
                        }
                    });
                }
            }
        });
    }



}

export interface Pet {
    id:number;
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
