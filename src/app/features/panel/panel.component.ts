import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { UserDataModel } from '../login/login.model';
import { JsonPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AppNavbar } from '../../components/navbar/navbar.component';

@Component({
    templateUrl: 'panel.component.html',
    imports:[JsonPipe,CardModule,AppNavbar]
})

export class PanelComponent implements OnInit {
    constructor() { }
    userData!:UserDataModel

    loginService = inject(LoginService)

    ngOnInit() { 
        this.userData = this.loginService.getFromLocalStorage('userData')
    }
}