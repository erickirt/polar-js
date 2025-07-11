# WebhooksListWebhookEndpointsRequest

## Example Usage

```typescript
import { WebhooksListWebhookEndpointsRequest } from "@polar-sh/sdk/models/operations/webhookslistwebhookendpoints.js";

let value: WebhooksListWebhookEndpointsRequest = {
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `organizationId`                                | *operations.QueryParamOrganizationId*           | :heavy_minus_sign:                              | Filter by organization ID.                      |
| `page`                                          | *number*                                        | :heavy_minus_sign:                              | Page number, defaults to 1.                     |
| `limit`                                         | *number*                                        | :heavy_minus_sign:                              | Size of a page, defaults to 10. Maximum is 100. |