import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AppConfig, LayoutService } from "./layout/service/app.layout.service";
import { DARK_COLORSCHEME, VELA_GREEN_THEME } from "./layout/config/themes.constants";

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
            ripple: false,
            inputStyle: 'outlined',
            menuMode: 'static',
            colorScheme: DARK_COLORSCHEME,
            theme: VELA_GREEN_THEME,
            scale: 14
        };
        this.layoutService.config.set(config);
    }
}
