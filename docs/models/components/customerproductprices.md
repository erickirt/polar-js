# CustomerProductPrices


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2025-03-28T17:53:12.899Z"),
  modifiedAt: new Date("2025-10-27T07:25:25.401Z"),
  id: "<value>",
  amountType: "custom",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 904838,
  maximumAmount: 47410,
  presetAmount: 774085,
  legacy: true,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2023-11-12T09:36:50.641Z"),
  modifiedAt: null,
  id: "<value>",
  amountType: "fixed",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "year",
  priceCurrency: "<value>",
  priceAmount: 403500,
};
```

