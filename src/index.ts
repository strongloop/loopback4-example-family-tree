// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: family-tree
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {FamilyTreeApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {FamilyTreeApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new FamilyTreeApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
