/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitLicenseKeysCreateProperties,
  BenefitLicenseKeysCreateProperties$inboundSchema,
  BenefitLicenseKeysCreateProperties$Outbound,
  BenefitLicenseKeysCreateProperties$outboundSchema,
} from "./benefitlicensekeyscreateproperties.js";

export type BenefitLicenseKeysCreateMetadata =
  | string
  | number
  | number
  | boolean;

export type BenefitLicenseKeysCreate = {
  /**
   * Key-value object allowing you to store additional information.
   *
   * @remarks
   *
   * The key must be a string with a maximum length of **40 characters**.
   * The value must be either:
   *
   * * A string with a maximum length of **500 characters**
   * * An integer
   * * A floating-point number
   * * A boolean
   *
   * You can store up to **50 key-value pairs**.
   */
  metadata?: { [k: string]: string | number | number | boolean } | undefined;
  type: "license_keys";
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description: string;
  /**
   * The ID of the organization owning the benefit. **Required unless you use an organization token.**
   */
  organizationId?: string | null | undefined;
  properties: BenefitLicenseKeysCreateProperties;
};

/** @internal */
export const BenefitLicenseKeysCreateMetadata$inboundSchema: z.ZodType<
  BenefitLicenseKeysCreateMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type BenefitLicenseKeysCreateMetadata$Outbound =
  | string
  | number
  | number
  | boolean;

/** @internal */
export const BenefitLicenseKeysCreateMetadata$outboundSchema: z.ZodType<
  BenefitLicenseKeysCreateMetadata$Outbound,
  z.ZodTypeDef,
  BenefitLicenseKeysCreateMetadata
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitLicenseKeysCreateMetadata$ {
  /** @deprecated use `BenefitLicenseKeysCreateMetadata$inboundSchema` instead. */
  export const inboundSchema = BenefitLicenseKeysCreateMetadata$inboundSchema;
  /** @deprecated use `BenefitLicenseKeysCreateMetadata$outboundSchema` instead. */
  export const outboundSchema = BenefitLicenseKeysCreateMetadata$outboundSchema;
  /** @deprecated use `BenefitLicenseKeysCreateMetadata$Outbound` instead. */
  export type Outbound = BenefitLicenseKeysCreateMetadata$Outbound;
}

export function benefitLicenseKeysCreateMetadataToJSON(
  benefitLicenseKeysCreateMetadata: BenefitLicenseKeysCreateMetadata,
): string {
  return JSON.stringify(
    BenefitLicenseKeysCreateMetadata$outboundSchema.parse(
      benefitLicenseKeysCreateMetadata,
    ),
  );
}

export function benefitLicenseKeysCreateMetadataFromJSON(
  jsonString: string,
): SafeParseResult<BenefitLicenseKeysCreateMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitLicenseKeysCreateMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitLicenseKeysCreateMetadata' from JSON`,
  );
}

/** @internal */
export const BenefitLicenseKeysCreate$inboundSchema: z.ZodType<
  BenefitLicenseKeysCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  type: z.literal("license_keys"),
  description: z.string(),
  organization_id: z.nullable(z.string()).optional(),
  properties: BenefitLicenseKeysCreateProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type BenefitLicenseKeysCreate$Outbound = {
  metadata?: { [k: string]: string | number | number | boolean } | undefined;
  type: "license_keys";
  description: string;
  organization_id?: string | null | undefined;
  properties: BenefitLicenseKeysCreateProperties$Outbound;
};

/** @internal */
export const BenefitLicenseKeysCreate$outboundSchema: z.ZodType<
  BenefitLicenseKeysCreate$Outbound,
  z.ZodTypeDef,
  BenefitLicenseKeysCreate
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  type: z.literal("license_keys"),
  description: z.string(),
  organizationId: z.nullable(z.string()).optional(),
  properties: BenefitLicenseKeysCreateProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitLicenseKeysCreate$ {
  /** @deprecated use `BenefitLicenseKeysCreate$inboundSchema` instead. */
  export const inboundSchema = BenefitLicenseKeysCreate$inboundSchema;
  /** @deprecated use `BenefitLicenseKeysCreate$outboundSchema` instead. */
  export const outboundSchema = BenefitLicenseKeysCreate$outboundSchema;
  /** @deprecated use `BenefitLicenseKeysCreate$Outbound` instead. */
  export type Outbound = BenefitLicenseKeysCreate$Outbound;
}

export function benefitLicenseKeysCreateToJSON(
  benefitLicenseKeysCreate: BenefitLicenseKeysCreate,
): string {
  return JSON.stringify(
    BenefitLicenseKeysCreate$outboundSchema.parse(benefitLicenseKeysCreate),
  );
}

export function benefitLicenseKeysCreateFromJSON(
  jsonString: string,
): SafeParseResult<BenefitLicenseKeysCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitLicenseKeysCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitLicenseKeysCreate' from JSON`,
  );
}
