import { Injectable } from '@angular/core';

import { Configuration } from "../api/configuration";

@Injectable()
export class ConfigurationService {

    getUserConfiguration(): Configuration {
        return {
            id: 1,
            currency: 'USD',
            isLightMode: false
        };
    }
}
