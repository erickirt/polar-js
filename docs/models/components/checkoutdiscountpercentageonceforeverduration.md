# CheckoutDiscountPercentageOnceForeverDuration

Schema for a percentage discount that is applied once or forever.

## Example Usage

```typescript
import { CheckoutDiscountPercentageOnceForeverDuration } from "@polar-sh/sdk/models/components/checkoutdiscountpercentageonceforeverduration.js";

let value: CheckoutDiscountPercentageOnceForeverDuration = {
  duration: "forever",
  type: "percentage",
  basisPoints: 364509,
  id: "<value>",
  name: "<value>",
  code: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `duration`                                                                 | [components.DiscountDuration](../../models/components/discountduration.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | [components.DiscountType](../../models/components/discounttype.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `basisPoints`                                                              | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the object.                                                      |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `code`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |