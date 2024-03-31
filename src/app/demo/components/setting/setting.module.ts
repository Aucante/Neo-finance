import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from "./setting-routing.module";
import { ConfigurationService } from "../../service/configuration.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SettingRoutingModule
  ],
    providers: [ConfigurationService],
})
export class SettingModule { }
