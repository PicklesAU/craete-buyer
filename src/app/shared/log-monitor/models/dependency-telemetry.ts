/**
 * DependencyTelemetry telemetry interface
 */
export class DependencyTelemetry {
  id: string;
  name?: string;
  duration?: number;
  success?: boolean;
  responseCode: number;
  correlationContext?: string;
  type?: string;
  data?: string;
  target?: string;
  properties?: {
    [key: string]: any;
  };
  measurements?: {
    [key: string]: number;
  };
}
