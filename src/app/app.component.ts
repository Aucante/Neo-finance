import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AppConfig, LayoutService } from "./layout/service/app.layout.service";
import {
    DARK_COLORSCHEME,
    INPUT_STYLE,
    MENU_MODE,
    RIPPLE,
    SCALE_VALUE,
    VELA_GREEN_THEME
} from "./layout/config/config.constants";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig,
        private layoutService: LayoutService
    ) { }

    ngOnInit() {
        this.primengConfig.ripple = true;

        const config: AppConfig = {
            ripple: RIPPLE,
            inputStyle: INPUT_STYLE,
            menuMode: MENU_MODE,
            colorScheme: DARK_COLORSCHEME,
            theme: VELA_GREEN_THEME,
            scale: SCALE_VALUE
        };
        this.layoutService.config.set(config);
    }
}
