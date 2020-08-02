// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

export default (options = {}): Hook => {
	return async (context: HookContext) => {
		context.params.sequelize = {
			include: [
				{
					model: context.app.services.users.Model,
					attributes: [ 'name', 'status', 'thumbnail', 'description', 'updatedAt', 'background' ],
				},
			],
		};
		return context;
	};
};
