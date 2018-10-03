// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: family-tree
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/// <reference types="express" />
import { Request } from '@loopback/rest';
/**
 * A simple controller to bounce back http requests
 */
export declare class PingController {
    private req;
    constructor(req: Request);
    ping(): object;
}
