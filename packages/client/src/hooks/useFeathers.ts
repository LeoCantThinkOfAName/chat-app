import feathers from '@feathersjs/client';
import { FeathersErrorJSON } from '@feathersjs/errors';
import { useEffect, useState } from 'react';

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT as string;

interface Prop {
	service: string;
	method: 'all' | 'find' | 'get' | 'create' | 'update' | 'patch' | 'remove';
	data: any;
}

export const useFeathers = <T>({ service, method, data }: Prop): [T | null, FeathersErrorJSON | null] => {
	const [ state, setState ] = useState<T | null>(null);
	const [ error, setError ] = useState<FeathersErrorJSON | null>(null);

	useEffect(
		() => {
			if (data) {
				const app = feathers();
				const restClient = feathers.rest(apiEndpoint);
				app.configure(restClient.fetch(window.fetch));
				const Service = app.service(service);
				Service[method](data)
					.then((response: T) => {
						setState(response);
					})
					.catch((err: any) => {
						setError(err);
					});
			}
		},
		[ service, method, data ]
	);

	return [ state, error ];
};


