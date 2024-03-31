import { Component } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { FormsModule } from "@angular/forms";
import { InputSwitchModule } from "primeng/inputswitch";
import { ButtonModule } from "primeng/button";
import { Configuration } from "../../api/configuration";
import { ConfigurationService } from "../../service/configuration.service";

@Component({
  selector: 'app-setting',
  standalone: true,
    imports: [
        DividerModule,
        FormsModule,
        InputSwitchModule,
        ButtonModule
    ],
  templateUrl: './setting.component.html',
})
export class SettingComponent {

    configuration!: Configuration;

    constructor(
        private configurationService: ConfigurationService
    ) { }

    ngOnInit() {
        this.configuration = this.configurationService.getUserConfiguration();
    }
}
