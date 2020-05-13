export class PageViewTelemetry {
  /**
   * @description The string you used as the name in startTrackPage. Defaults to the document title.
   */
  name?: string;
  /**
   * @description A relative or absolute URL that identifies the page or other item. Defaults to the window location.
   */
  uri?: string;
  /**
   * @description The URL of the source page where current page is loaded from
   */
  refUri?: string;
  /**
   * @description page type
   */
  pageType?: string;
  /**
   * @description Is user logged in
   */
  isLoggedIn?: boolean;
  /**
   * @description Property bag to contain an extension to domain properties - extension to Part B
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
