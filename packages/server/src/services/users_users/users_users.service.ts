// Initializes the `users_users` service on path `/users-users`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { UsersUsers } from './users_users.class';
import createModel from '../../models/users_users.model';
import hooks from './users_users.hooks';

// Add this service to the service type index
declare module '../../declarations' {
	interface ServiceTypes {
		'friends': UsersUsers & ServiceAddons<any>;
	}
}

export default function(app: Application) {
	const options = {
		Model: createModel(app),
	};

	// Initialize our service with any options it requires
	app.use('/friends', new UsersUsers(options, app));

	// Get our initialized service so that we can register hooks
	const service = app.service('friends');

	service.hooks(hooks);
}
