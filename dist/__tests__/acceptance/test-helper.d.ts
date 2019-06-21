import { Loopback4ExampleFamilyTree3Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Loopback4ExampleFamilyTree3Application;
    client: Client;
}
