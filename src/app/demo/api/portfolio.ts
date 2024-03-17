import { User } from "./user";

export interface Portfolio {
    id: number;
    name: string;
    type: string;
    value: number;
    lastUpdateDate: Date;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
