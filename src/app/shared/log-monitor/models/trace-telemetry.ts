import { SeverityLevel } from '../enums/severity-level.enum';

export class TraceTelemetry {
  /**
   * @description A message string
   */
  message: string;
  /**
   * @description Severity level of the logging message used for filtering in the portal
   */
  severityLevel?: SeverityLevel;
  /**
   * @description property bag to contain an extension to domain properties - extension to Part B
   */
  properties?: {
    [key: string]: any;
  };
}
