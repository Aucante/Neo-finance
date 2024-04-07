import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { StepsModule } from "primeng/steps";
import { TabMenuModule } from "primeng/tabmenu";

@Component({
  selector: 'app-portfolio-create',
  standalone: true,
    imports: [
        RouterOutlet,
        StepsModule,
        TabMenuModule
    ],
  templateUrl: './portfolio-create.component.html',
})
export class PortfolioCreateComponent implements OnInit{
    ngOnInit(): void {
    }

}
