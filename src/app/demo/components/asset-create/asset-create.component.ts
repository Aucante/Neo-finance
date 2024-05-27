import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StepsModule } from "primeng/steps";
import { TabMenuModule } from "primeng/tabmenu";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-asset-create',
    standalone: true,
    imports: [
        RouterOutlet,
        StepsModule,
        TabMenuModule,
        ButtonModule,
        DropdownModule,
        InputTextModule,
        FormsModule
    ],
    templateUrl: './asset-create.component.html',
})
export class AssetCreateComponent implements OnInit {
    ngOnInit(): void {
    }
}
