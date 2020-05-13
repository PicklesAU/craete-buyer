import { SeverityLevel } from '../enums/severity-level.enum';

export class ExceptionTelemetry {
  /**
   * @description Unique guid identifying this error
   */
  id?: string;
  /**
   * @description DEPRECATED: Please use exception instead. Behavior/usage for exception remains the same as this field.
   */
  error?: Error;
  /**
   * @description Error Object(s)
   */
  exception?: Error;
  /**
   * @description Specified severity of exception for use with
   * telemetry filtering in dashboard
   */
  severityLevel?: SeverityLevel | number;
  /**
   * @description Collection of custom properties
   */
  properties?: {
    [key: string]: any;
  };
  /**
   * @description Collection of custom measurements
   */
  measurements?: {
    [key: string]: number;
  };
}
