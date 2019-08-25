import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    private users: User[] = [
        {
          username: 'admin',
          password: 'admin'
        },
        {
            username: 'tamagotchi15',
            password: '1234'
        },
        {
            username: 'pou2019',
            password: '2019'
        },
        {
            username: 'usuario4',
            password: 'usuario4'
        },
        {
            username: 'estudiante1',
            password: 'ipc2_'
        }
      ];


    constructor() {
    }



    buscarUsuario(username: string, password: string ): boolean {
      username = username.toLowerCase();
      password = password.toLowerCase();
      for(let h = 0; h<this.users.length; h++) {
        let user: User = this.users[h];
        if(user.username.toLowerCase() === username && user.password.toLowerCase() === password){
            return true;
            break;
        }

      }
      return false;
    }
}

export interface User {
    username: string;
    password: string;
};

