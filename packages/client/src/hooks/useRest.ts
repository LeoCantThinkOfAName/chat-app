import {app} from '../feathersClient';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';

interface RequestProp {
	service: string;
	method: 'all' | 'find' | 'get' | 'create' | 'update' | 'patch' | 'remove';
	data: any;
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
    data: null
  });

  useEffect(() => {
    if(request.data) {
      setLoading(true);
      const service = app.service(request.service);
      service[request.method](request.data)
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
