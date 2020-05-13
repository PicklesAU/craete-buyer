export class MetricTelemetry {
  /**
   * @description (required) - name of this metric
   */
  name: string;
  /**
   * @description (required) - Recorded value/average for this metric
   */
  average: number;
  /**
   * @description (optional) Number of samples represented by the average.
   * @default sampleCount=1
   */
  sampleCount?: number;
  /**
   * @description (optional) The smallest measurement in the sample. Defaults to the average
   * @default min=average
   */
  min?: number;
  /**
   * @description (optional) The largest measurement in the sample. Defaults to the average.
   * @default max=average
   */
  max?: number;
}
