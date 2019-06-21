import { Loopback4ExampleFamilyTreeApplication } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Loopback4ExampleFamilyTreeApplication;
    client: Client;
}
