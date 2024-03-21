import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { }

    changeTheme() {
        console.log(this.theme)
        const theme = this.theme === "vela-green" ? "md-light-deeppurple" : "vela-green";
        this.layoutService.config.update((config) => ({
            ...config,
            theme: theme,
        }));
    }

    changeColorScheme() {
        console.log(this.colorScheme)
        const colorScheme = this.colorScheme === "dark" ? "light" : "dark";
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: colorScheme,
        }));
    }

    toggleDarkMode() {
        this.changeTheme();
        this.changeColorScheme();
    }

    get theme(): string {
        return this.layoutService.config().theme;
    }

    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }
}
