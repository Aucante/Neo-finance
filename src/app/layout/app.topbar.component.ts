import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import {
    COLORSCHEME,
    DARK_COLORSCHEME,
    LIGHT_COLORSCHEME,
    SAGA_GREEN_THEME,
    THEME,
    VELA_GREEN_THEME
} from "./config/config.constants";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    isDarkMode: boolean = true;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        this.changeTheme();
        this.changeColorScheme();
        this.saveThemeToLocalStorage();
    }

    changeTheme() {
        const theme = this.theme === VELA_GREEN_THEME ? SAGA_GREEN_THEME : VELA_GREEN_THEME;
        this.layoutService.config.update((config) => ({
            ...config,
            theme: theme,
        }));
    }

    changeColorScheme() {
        const colorScheme = this.colorScheme === DARK_COLORSCHEME ? LIGHT_COLORSCHEME : DARK_COLORSCHEME;
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: colorScheme,
        }));
    }

    get theme(): string {
        return this.layoutService.config().theme;
    }

    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    saveThemeToLocalStorage() {
        localStorage.setItem(THEME, this.theme);
    }
}
