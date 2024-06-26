import { Component, OnInit } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Homepage', icon: 'pi pi-fw pi-home', routerLink: ['/homepage'] },
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Portfolios', icon: 'pi pi-fw pi-home', routerLink: ['/portfolio-dashboard'] },
                ]
            },
            {
                label: 'Settings',
                items: [
                    { label: 'Settings', icon: 'pi pi-fw pi-home', routerLink: ['/settings'] },
                ]
            },
            {
                label: 'Control Panel',
                items: [
                    { label: 'Portfolio Management', icon: 'pi pi-fw pi-home', routerLink: ['/portfolio/add-portfolio'] },
                    { label: 'Asset Management', icon: 'pi pi-fw pi-home', routerLink: ['/asset/add-asset'] },
                    { label: 'Transaction Management', icon: 'pi pi-fw pi-home', routerLink: ['/transaction/add-transaction'] },
                    { label: 'Income Management', icon: 'pi pi-fw pi-home', routerLink: ['/income/add-income'] },
                ],
            },
            {
                label: 'Authentication',
                items: [
                    { label: 'Login', icon: 'pi pi-fw pi-home', routerLink: ['/auth/login'] },
                    { label: 'Register', icon: 'pi pi-fw pi-home', routerLink: ['/auth/register'] },
                ],
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound']
                    },
                ]
            }
        ];
    }
}
