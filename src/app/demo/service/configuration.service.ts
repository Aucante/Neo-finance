import { Injectable } from '@angular/core';

import { Configuration } from "../api/configuration";
import { MOCK_CONFIGURATION } from "./mock/configuration-mock";

@Injectable()
export class ConfigurationService {

    getUserConfiguration(): Configuration {
        return MOCK_CONFIGURATION;
    }
}
