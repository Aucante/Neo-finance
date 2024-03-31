import { Component } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { FormsModule } from "@angular/forms";
import { InputSwitchModule } from "primeng/inputswitch";
import { ButtonModule } from "primeng/button";
import { Configuration } from "../../api/configuration";
import { ConfigurationService } from "../../service/configuration.service";
import { CURRENCIES_CODE, SettingHelper } from "../../helper/setting-helper";
import { NgForOf } from "@angular/common";

interface CurrencyConfiguration {
    icon: string,
    isSelected: boolean
}

@Component({
  selector: 'app-setting',
  standalone: true,
    imports: [
        DividerModule,
        FormsModule,
        InputSwitchModule,
        ButtonModule,
        NgForOf
    ],
  templateUrl: './setting.component.html',
})
export class SettingComponent {

    configuration: Configuration;

    currencies: CurrencyConfiguration[];

    constructor(
        private configurationService: ConfigurationService
    ) { }

    ngOnInit() {
        this.configuration = this.configurationService.getUserConfiguration();
        this.currencies = CURRENCIES_CODE.map(currency => this.getCurrencyConfiguration(currency));
        console.log(this.currencies)
    }

    getCurrencyConfiguration(currencyCode: string): CurrencyConfiguration {
        const currencyConfigurationIcon: string = this.getCurrencyIcon(currencyCode);
        const isCurrencyConfigurationSelected: boolean = this.isConfigurationCurrency(currencyCode);

        return {
            icon: currencyConfigurationIcon,
            isSelected: isCurrencyConfigurationSelected
        }
    }

    getCurrencyIcon(currencyCode: string): string {
        return SettingHelper.getCurrencyName(currencyCode);
    }

    isConfigurationCurrency(currencyIcon: string) {
        return currencyIcon === this.configuration.currency;
    }

    toggleCurrencySelection(currency: CurrencyConfiguration): void {
        this.currencies.forEach(currency => {
            currency.isSelected = false;
        });
        currency.isSelected = !currency.isSelected;
        console.table(this.currencies)
    }
}
