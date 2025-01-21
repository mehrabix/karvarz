import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ToastModule } from 'primeng/toast';
import { LoginService } from './login.service';
import { jwtDecode } from "jwt-decode";
import { LoginResponse, UserDataModel } from './login.model';
import { timer } from 'rxjs';


@Component({
    templateUrl: 'login.Component.html',
    imports: [InputGroupModule, InputGroupAddonModule, FormsModule, ButtonModule, ToastModule],
    providers: [MessageService, LoginService]
})

export class LoginComponent {
    router = inject(Router)
    messageService = inject(MessageService)
    loginService = inject(LoginService)
    username!: string

    password!: string

    //  count:WritableSignal<number> = signal(1);
    //  doubleCount:Signal<number> = computed(() => this.count() * 2);




    // constructor() { 


    //     effect(() =>{
    //         console.log(this.count());
    //         console.log(this.doubleCount());

    //         if(this.doubleCount() > 20){
    //             alert("پایان!")
    //         }


    //     })
    // }

    // ngOnInit() { }


    // increase(){
    //     this.count.update(oldValue => oldValue + 1)
    // }

    // decrease(){
    //     this.count.update(oldValue => oldValue - 1)

    // }


    login() {

        debugger

        this.password
        this.username

        this.loginService.login({
            username: this.username,
            password: this.password,
            expiresInMins: 30,
        }).subscribe({
            next: ((response: LoginResponse) => {
                const decodedToken: UserDataModel = jwtDecode(response.accessToken as string)
                this.loginService.saveToLocalStorage(decodedToken)
                timer(2000).subscribe({
                    next: (() => {
                        this.messageService.add({ severity: 'success', summary: 'اطلاعات ورود', detail: 'با موفقیت لاگین شذ!' });
                    }
                    ),
                    complete: (() => {
                        timer(3000).subscribe({
                            next: (() => {
                                this.router.navigate(['/panel'])

                            })
                        })

                    })
                })
                debugger
            }),
            error: ((error) => {
                debugger
            }),
            complete: (() => {

            })
        })


        // if (this.password === 'test' && this.username === 'test') {
        //     this.messageService.add({severity: 'success', summary:  'اطلاعات ورود', detail: 'با موفقیت لاگین شذ!' });

        //     timer(3000).subscribe({
        //         next:(() =>{
        //             this.router.navigate(['/panel'])

        //         })
        //     })
        // }

    }
}