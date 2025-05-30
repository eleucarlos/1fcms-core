// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {
  StopTransactionRequestReason,
  StopTransactionRequestContext,
  StopTransactionRequestFormat,
  StopTransactionRequestMeasurand,
  StopTransactionRequestPhase,
  StopTransactionRequestLocation,
  StopTransactionRequestUnit,
} from '../enums';
import { OcppRequest } from '../../../..';

export interface StopTransactionRequest extends OcppRequest {
  idTag?: string | null;
  meterStop: number;
  timestamp: string;
  transactionId: number;
  reason?: StopTransactionRequestReason | null;
  transactionData?: {
    timestamp: string | null;
    sampledValue: {
      value: string;
      context?: StopTransactionRequestContext | null;
      format?: StopTransactionRequestFormat | null;
      measurand?: StopTransactionRequestMeasurand | null;
      phase?: StopTransactionRequestPhase | null;
      location?: StopTransactionRequestLocation | null;
      unit?: StopTransactionRequestUnit | null;
    }[];
  }[];
}
