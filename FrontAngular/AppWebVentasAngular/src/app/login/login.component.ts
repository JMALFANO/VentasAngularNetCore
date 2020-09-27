import { OnInit, Component } from '@angular/core';
import { ApiauthService } from '../services/apiauth.service';
import { Router } from '@angular/router';

@Component({templateUrl: 'login.component.html'})

export class LoginComponent implements OnInit{

    public email: string;
    public password: string;

    constructor(public apiauthService: ApiauthService, private router: Router){
        if(this.apiauthService.usuarioData){
            this.router.navigate(['/']);
        }
    }


    ngOnInit(){
    }

    login (){
        this.apiauthService.login(this.email, this.password).subscribe(response =>{
            if(response.exito ===1){
                this.router.navigate(['/'])
            }
        });
    }
}