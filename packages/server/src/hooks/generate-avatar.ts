// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

export default (options = {}): Hook => {
	const api = 'https://api.adorable.io/avatars/285/';
	return async (context: HookContext) => {
		const { data } = context;
		if (data.thumbnail === null || data.thumbnail === '' || data.thumbnail === undefined) {
			context.data = {
				...data,
				thumbnail: `${api}.${data.email}.png`,
			};
		}
		return context;
	};
};
