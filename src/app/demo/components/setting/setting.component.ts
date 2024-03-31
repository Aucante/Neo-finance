import { Component } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { FormsModule } from "@angular/forms";
import { InputSwitchModule } from "primeng/inputswitch";

@Component({
  selector: 'app-setting',
  standalone: true,
    imports: [
        DividerModule,
        FormsModule,
        InputSwitchModule
    ],
  templateUrl: './setting.component.html',
})
export class SettingComponent {

}
