// Initializes the `users_chatrooms` service on path `/users-chatrooms`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { UsersChatrooms } from './users_chatrooms.class';
import createModel from '../../models/users_chatrooms.model';
import hooks from './users_chatrooms.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'users-chatrooms': UsersChatrooms & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users-chatrooms', new UsersChatrooms(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users-chatrooms');

  service.hooks(hooks);
}
