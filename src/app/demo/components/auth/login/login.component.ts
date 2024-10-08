import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthenticationService, LoginResponse } from "../../../service/api/authentication.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    email!: string;

    password!: string;

    formData = {
        email: '',
        password: ''
    };

    constructor(
        public layoutService: LayoutService,
        private authenticationService: AuthenticationService
    ) { }

    onSubmit() {
        this.authenticationService.login(this.formData).subscribe((value: LoginResponse ) => {
            console.log(value)
        });
    }
}
