# IntrospectTokenResponse

## Example Usage

```typescript
import { IntrospectTokenResponse } from "@polar-sh/sdk/models/components/introspecttokenresponse.js";

let value: IntrospectTokenResponse = {
  active: true,
  clientId: "<id>",
  tokenType: "refresh_token",
  scope: "<value>",
  subType: "organization",
  sub: "<value>",
  aud: "<value>",
  iss: "<value>",
  exp: 646198,
  iat: 983245,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `active`                                                     | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `clientId`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `tokenType`                                                  | [components.TokenType](../../models/components/tokentype.md) | :heavy_check_mark:                                           | N/A                                                          |
| `scope`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `subType`                                                    | [components.SubType](../../models/components/subtype.md)     | :heavy_check_mark:                                           | N/A                                                          |
| `sub`                                                        | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `aud`                                                        | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `iss`                                                        | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `exp`                                                        | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `iat`                                                        | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |