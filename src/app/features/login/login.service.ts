import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from './login.model';

@Injectable({providedIn: 'root'})
export class LoginService {
    http = inject(HttpClient)


    login(loginInput:LoginRequest){
        return this.http.post('https://dummyjson.com/auth/login',loginInput)
    }


    saveToLocalStorage(loginResponse:LoginResponse){
        const stringData = JSON.stringify(loginResponse);

        localStorage.setItem('userData',stringData)
    }

    getFromLocalStorage(key:string){
        return JSON.parse(localStorage.getItem(key) as string)
    }
    
}