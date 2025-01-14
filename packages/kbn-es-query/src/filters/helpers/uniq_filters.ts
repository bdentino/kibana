/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { each, union } from 'lodash';
import type { Filter } from '..';
import { dedupFilters } from './dedup_filters';

/**
 * Remove duplicate filters from an array of filters
 *
 * @param {array} filters The filters to remove duplicates from
 * @param {object} comparatorOptions - Parameters to use for comparison
 * @returns {object} The original filters array with duplicates removed
 * @public
 */
export const uniqFilters = (filters: Filter[], comparatorOptions: any = {}) => {
  let results: Filter[] = [];

  each(filters, (filter: Filter) => {
    results = union(results, dedupFilters(results, [filter]), comparatorOptions);
  });

  return results;
};
