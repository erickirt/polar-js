# CustomerBenefitGrantDownloadables

## Example Usage

```typescript
import { CustomerBenefitGrantDownloadables } from "@polar-sh/sdk/models/components/customerbenefitgrantdownloadables.js";

let value: CustomerBenefitGrantDownloadables = {
  createdAt: new Date("2023-08-19T04:17:07.651Z"),
  modifiedAt: null,
  id: "<value>",
  grantedAt: new Date("2024-07-02T19:26:03.934Z"),
  revokedAt: null,
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: true,
  customer: {
    createdAt: new Date("2025-10-07T04:17:24.786Z"),
    modifiedAt: new Date("2025-05-05T02:01:44.871Z"),
    id: "<value>",
    email: "Sedrick_Paucek@hotmail.com",
    emailVerified: true,
    name: "<value>",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2023-04-16T09:10:09.910Z"),
    modifiedAt: new Date("2023-12-30T04:50:40.414Z"),
    type: "downloadables",
    description: "apologise flint king save to at availability ick",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    metadata: {},
    organization: {
      createdAt: new Date("2025-01-01T18:22:02.718Z"),
      modifiedAt: new Date("2024-07-27T17:28:22.859Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: null,
      email: "Hannah_Price@gmail.com",
      website: "<value>",
      socials: [
        {
          platform: "youtube",
          url: "https://expert-elevation.org",
        },
      ],
      detailsSubmittedAt: new Date("2025-12-07T19:21:48.818Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
      notificationSettings: {
        newOrder: true,
        newSubscription: true,
      },
    },
    properties: {
      activeFiles: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Creation timestamp of the object.                                                                                |
| `modifiedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Last modification timestamp of the object.                                                                       |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the object.                                                                                            |
| `grantedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `revokedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customerId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `benefitId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `subscriptionId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `orderId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `isGranted`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `isRevoked`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customer`                                                                                                       | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `benefit`                                                                                                        | [components.BenefitDownloadablesSubscriber](../../models/components/benefitdownloadablessubscriber.md)           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `properties`                                                                                                     | [components.BenefitGrantDownloadablesProperties](../../models/components/benefitgrantdownloadablesproperties.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |