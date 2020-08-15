import { app } from '../feathersClient';

interface Props {
	service: string;
	query?: { [key: string]: string | number };
	method?: 'all' | 'find' | 'get';
}

export const fetcher = async <T>({ service, query, method = 'get' }: Props): Promise<T | null> => {
	const Service = app.service(service);

	const data = await Service[method]({ query })
		.then((response: T) => {
			return response;
		})
		.catch((err: any) => {
			console.log(err);
		});

	return data;
};
