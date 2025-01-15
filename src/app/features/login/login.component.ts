import { Component, inject } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';

import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';


@Component({
    templateUrl: 'login.Component.html',
    imports: [InputGroupModule, InputGroupAddonModule, FormsModule, ButtonModule, ToastModule],
    providers:[MessageService]
})

export class LoginComponent {
    router = inject(Router)
    messageService = inject(MessageService)
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


        if (this.password === 'test' && this.username === 'test') {
            this.messageService.add({severity: 'success', summary:  'اطلاعات ورود', detail: 'با موفقیت لاگین شذ!' });

            timer(3000).subscribe({
                next:(() =>{
                    this.router.navigate(['/panel'])

                })
            })
        }

    }
}