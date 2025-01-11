import { useCallback, useEffect, useState } from "react";

export const useApi = (apiCall, options) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetch = useCallback(
    async (param) => {
      const { call, controller } = apiCall(param);
      setLoading(true);

      try {
        const response = await call;
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }

      return () => controller.abort();
    },
    [apiCall]
  );

  useEffect(() => {
    let cleanup;
    if (options?.autoFetch) {
      cleanup = fetch(options.params);
    }
    return () => cleanup && cleanup();
  }, [fetch, options?.autoFetch, options?.params]);

  return { loading, data, error, fetch };
};
