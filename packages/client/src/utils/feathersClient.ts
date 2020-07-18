import feathers from '@feathersjs/client';

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT as string;

interface Prop<T> {
	service: string;
	method: 'all' | 'find' | 'get' | 'create' | 'update' | 'patch' | 'remove';
	data: T;
}

export const feathersClient = async <T>(prop: Prop<T>) => {
	const { service, method, data } = prop;

	const app = feathers();
	const restClient = feathers.rest(apiEndpoint);
	app.configure(restClient.fetch(window.fetch));
	const Service = app.service(service);

	Service[method](data)
		.then((response: any) => response.json)
		.then((response: any) => console.log(response))
		.catch((err: any) => console.log(err));
};
