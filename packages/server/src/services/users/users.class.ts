import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { User } from '@chat-app/shared';
import { Params, Id } from '@feathersjs/feathers';

export class Users extends Service {
	constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
		super(options);
	}

	create(data: User, params: Params) {
		return super.create(data, params);
	}

	get(id: Id, params: Params) {
		return super.get(id, params);
	}
}
