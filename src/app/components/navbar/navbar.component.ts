import { Component, Input, OnInit } from '@angular/core';
import { UserDataModel } from '../../features/login/login.model';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})

export class AppNavbar implements OnInit {
    @Input() userData!:UserDataModel
    constructor() { }

    ngOnInit() { }
}