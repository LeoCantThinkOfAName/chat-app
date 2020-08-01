import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { app } from '../feathersClient';

interface RequestProp {
	service: string;
	method: 'all' | 'find' | 'get' | 'create' | 'update' | 'patch' | 'remove';
  data: any;
  id?: number;
}

export const useRest = <T>(): [{
  data: T | null;
  loading: boolean;
  error: any
}, Dispatch<SetStateAction<RequestProp>>] => {
  const [data, setData] = useState<T | null>(null);
  const [error , setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [request, setRequest] = useState<RequestProp>({
    service: "",
    method: "all",
    data: null,
    id: undefined
  });

  useEffect(() => {
    if(request.data) {
      setLoading(true);
      const service = app.service(request.service);
      service[request.method](request.id, request.data)
        .then((response: T) => {
          setData(response);
          setLoading(false);
        })
        .catch((err: any) => {
          setError(err);
          setLoading(false);
        })
    }
  }, [request]);

  return [{data, loading, error}, setRequest];
}
