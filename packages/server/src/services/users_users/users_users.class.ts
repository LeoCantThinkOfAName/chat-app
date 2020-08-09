import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { Params, Id } from '@feathersjs/feathers';
import { BadRequest } from '@feathersjs/errors';
import { Users } from '../users/users.class';

export class UsersUsers extends Service {
	constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
		super(options);
	}

	create(data: { userId: Id; friendId: Id }, params: Params) {
		return super.create(
			{
				user_id: data.userId,
				friend_id: data.friendId,
			},
			params
		);
	}

	get(id: Id, params: Params) {
		console.log(id);
		return super.get(id, params);
	}

	find(data: any) {
		return super.find(data);
	}
}
