export class EventTelemetry {
  /**
   * @description An event name string
   */
  name: string;
  /**
   * @description Property bag to contain additional custom properties (Part C)
   */
  properties?: {
    [key: string]: any;
  };
  /**
   * @description Property bag to contain additional custom measurements (Part C)
   */
  measurements?: {
    [key: string]: number;
  };
}
