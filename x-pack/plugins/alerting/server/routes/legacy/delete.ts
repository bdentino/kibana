/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { schema } from '@kbn/config-schema';
import type { AlertingRouter } from '../../types';
import { ILicenseState } from '../../lib/license_state';
import { verifyApiAccess } from '../../lib/license_api_access';
import { LEGACY_BASE_ALERT_API_PATH } from '../../../common';

const paramSchema = schema.object({
  id: schema.string(),
});

export const deleteAlertRoute = (router: AlertingRouter, licenseState: ILicenseState) => {
  router.delete(
    {
      path: `${LEGACY_BASE_ALERT_API_PATH}/alert/{id}`,
      validate: {
        params: paramSchema,
      },
    },
    router.handleLegacyErrors(async function (context, req, res) {
      verifyApiAccess(licenseState);
      if (!context.alerting) {
        return res.badRequest({ body: 'RouteHandlerContext is not registered for alerting' });
      }
      const rulesClient = context.alerting.getRulesClient();
      const { id } = req.params;
      await rulesClient.delete({ id });
      return res.noContent();
    })
  );
};
