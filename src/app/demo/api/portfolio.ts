import { User } from "./user";

export interface Portfolio {
    id: number;
    name: string;
    type: string;
    value: number;
    lastUpdateDate: Date;
    user: User;
}
