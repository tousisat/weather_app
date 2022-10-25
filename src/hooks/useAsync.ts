import React from 'react';
import { useSnackbar } from 'notistack';

interface IUseAsync<AsyncFuncParams, AsyncFuncResponse> {
  asyncFunction: (params: AsyncFuncParams) => Promise<AsyncFuncResponse>;
  params?: AsyncFuncParams;
  onSuccess?: (res: AsyncFuncResponse) => void;
  onError?: (res: string) => void;
  executeOnMount?: boolean;
}

function useAsync<AsyncFuncParams extends Record<string, any>, AsyncFuncResponse>(payload: IUseAsync<AsyncFuncParams, AsyncFuncResponse>) {
  const [error, setError] = React.useState<string>('');
  const [data, setData] = React.useState<AsyncFuncResponse>();
  const [isLoading, setLoading] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const { asyncFunction, executeOnMount = true, onSuccess, onError, params = {} } = payload;

  React.useEffect(() => {
    if (executeOnMount) doAsync();
  }, []);

  const doAsync = async (otherParams: Partial<AsyncFuncParams> = {}) => {
    try {
      setLoading(true);
      setError('');
      setData(undefined);
      const response = await asyncFunction({ ...params, ...(otherParams as any) });

      onSuccess?.(response);
      setData(response);
      setLoading(false);
      return response;
    } catch (err: any) {
      const errorMsg = (err?.message || 'Something failed!') as string;
      setError(errorMsg);
      onError?.(errorMsg);
      setData(undefined);
      setLoading(false);
      enqueueSnackbar(errorMsg, { variant: 'error' });
    }
  };

  return { doAsync, data, error, isLoading };
}

export { useAsync };
