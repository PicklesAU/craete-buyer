export class PageViewPerformanceTelemetry {
  /**
   * @description The name of the page. Defaults to the document title.
   */
  name?: string;
  /**
   * @description A relative or absolute URL that identifies the page or other item. Defaults to the window location.
   */
  uri?: string;
  /**
   * @description Performance total in TimeSpan 'G' (general long) format: d:hh:mm:ss.fffffff". This is total duration in timespan format.
   */
  perfTotal?: string;
  /**
   * @description Performance total in TimeSpan 'G' (general long) format: d:hh:mm:ss.fffffff". This represents the total page load time.
   */
  duration?: string;
  /**
   * @description Sent request time in TimeSpan 'G' (general long) format: d:hh:mm:ss.fffffff
   */
  networkConnect?: string;
  /**
   * @description Sent request time in TimeSpan 'G' (general long) format: d:hh:mm:ss.fffffff.
   */
  sentRequest?: string;
  /**
   * @description Received response time in TimeSpan 'G' (general long) format: d:hh:mm:ss.fffffff.
   */
  receivedResponse?: string;
  /**
   * @description DOM processing time in TimeSpan 'G' (general long) format: d:hh:mm:ss.fffffff
   */
  domProcessing?: string;
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
