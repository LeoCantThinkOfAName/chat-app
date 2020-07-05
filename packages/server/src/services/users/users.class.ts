import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { User } from '@chat-app/shared';

export class Users extends Service {
	constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
		super(options);
	}

	create(data: User, params: any) {
		return super.create(data, params);
	}
}
