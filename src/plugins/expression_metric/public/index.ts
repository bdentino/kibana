/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { ExpressionMetricPlugin } from './plugin';

export type { ExpressionMetricPluginSetup, ExpressionMetricPluginStart } from './plugin';

export function plugin() {
  return new ExpressionMetricPlugin();
}

export * from './expression_renderers';
