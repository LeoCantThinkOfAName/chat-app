import { Dispatch, SetStateAction, useEffect, useState, useRef } from 'react';

import { app } from '../feathersClient';

interface RequestProp {
	service: string;
	method: 'all' | 'find' | 'get' | 'create' | 'update' | 'patch' | 'remove';
	data?: any;
	id?: number;
	query?: {
		[key: string]: number | string;
	};
}

export const useRest = <T>(): [
	{
		data: T | null;
		loading: boolean;
		error: any;
	},
	Dispatch<SetStateAction<RequestProp>>
] => {
	const _isMounted = useRef(true);
	const [ data, setData ] = useState<T | null>(null);
	const [ error, setError ] = useState<any>(null);
	const [ loading, setLoading ] = useState<boolean>(false);
	const [ request, setRequest ] = useState<RequestProp>({
		service: '',
		method: 'all',
		data: null,
		id: undefined,
		query: undefined,
	});

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	}, []);

	useEffect(
		() => {
			if (request.data || (request.query && _isMounted.current)) {
				const { service, method, data, id, query } = request;
				const Service = app.service(service);

				setLoading(true);

				if (query) {
					Service[method]({ query })
						.then((response: T) => {
							setData(response);
							setLoading(false);
						})
						.catch((err: any) => {
							setError(err);
							setLoading(false);
						});
				} else if (method === 'create') {
					Service[method](data)
						.then((response: T) => {
							setData(response);
							setLoading(false);
						})
						.catch((err: any) => {
							setError(err);
							setLoading(false);
						});
				} else {
					Service[method](id, data)
						.then((response: T) => {
							console.log(data);
							setData(response);
							setLoading(false);
						})
						.catch((err: any) => {
							setError(err);
							setLoading(false);
						});
				}
			}
		},
		[ request ]
	);

	return [ { data, loading, error }, setRequest ];
};
