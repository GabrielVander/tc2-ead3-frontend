interface ApiResponseMultipleResults<T> {
  status: boolean;
  data: T[];
  count: number;
  skipped: number;
  limit: number;
}

export default ApiResponseMultipleResults;
