/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { PluginInitializerContext } from 'src/core/public';
import {
  NewsfeedPublicPluginSetup,
  NewsfeedPublicPluginStart,
  NewsfeedPublicPlugin,
} from './plugin';
import { FetchResult, NewsfeedItem } from './types';
import { NewsfeedApiEndpoint } from './lib/api';

export type { NewsfeedPublicPluginSetup, NewsfeedPublicPluginStart, FetchResult, NewsfeedItem };
export { NewsfeedApiEndpoint };

export function plugin(initializerContext: PluginInitializerContext) {
  return new NewsfeedPublicPlugin(initializerContext);
}
