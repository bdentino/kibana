/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { SavedObjectsClientContract } from '../../../../../../../../src/core/server';
import { IRuleStatusSOAttributes } from '../../rules/types';
import {
  RuleStatusSavedObjectsClient,
  ruleStatusSavedObjectsClientFactory,
} from '../../signals/rule_status_saved_objects_client';
import {
  ExecutionMetric,
  ExecutionMetricArgs,
  FindBulkExecutionLogArgs,
  FindExecutionLogArgs,
  IRuleExecutionLogClient,
  LogStatusChangeArgs,
} from '../types';

export class SavedObjectsAdapter implements IRuleExecutionLogClient {
  private ruleStatusClient: RuleStatusSavedObjectsClient;

  constructor(savedObjectsClient: SavedObjectsClientContract) {
    this.ruleStatusClient = ruleStatusSavedObjectsClientFactory(savedObjectsClient);
  }

  public find({ ruleId, logsCount = 1 }: FindExecutionLogArgs) {
    return this.ruleStatusClient.find({
      perPage: logsCount,
      sortField: 'statusDate',
      sortOrder: 'desc',
      search: ruleId,
      searchFields: ['alertId'],
    });
  }

  public findBulk({ ruleIds, logsCount = 1 }: FindBulkExecutionLogArgs) {
    return this.ruleStatusClient.findBulk(ruleIds, logsCount);
  }

  public async create(event: IRuleStatusSOAttributes) {
    await this.ruleStatusClient.create(event);
  }

  public async update(id: string, event: IRuleStatusSOAttributes) {
    await this.ruleStatusClient.update(id, event);
  }

  public async delete(id: string) {
    await this.ruleStatusClient.delete(id);
  }

  public async logExecutionMetric<T extends ExecutionMetric>(args: ExecutionMetricArgs<T>) {
    // TODO These methods are intended to supersede ones provided by RuleStatusService
  }

  public async logStatusChange(args: LogStatusChangeArgs) {
    // TODO These methods are intended to supersede ones provided by RuleStatusService
  }
}
