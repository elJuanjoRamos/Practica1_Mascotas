import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ayuda } from '../services/auxiliar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit{

  validar: boolean = true;
  constructor(private userService: UserService,
              private router: Router, private activRoute: ActivatedRoute,
              private ayuda: Ayuda ) {
                this.activRoute.params.subscribe( params => {
                  console.log();
                  this.ayuda.cearUsuario();
                  this.ayuda.setUsuario(params['id']);
                });
  }
  ngOnInit(){}
  autenticar(username: string, password: string) {
    if (this.userService.buscarUsuario(username, password)) {
      this.validar = true;
      this.router.navigate( ['/dashboard/user/', username] );
    } else {
      this.validar = false;
    }
  }

}
