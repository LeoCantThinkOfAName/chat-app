// Initializes the `chatrooms` service on path `/chatrooms`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Chatrooms } from './chatrooms.class';
import createModel from '../../models/chatrooms.model';
import hooks from './chatrooms.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'chatrooms': Chatrooms & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/chatrooms', new Chatrooms(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('chatrooms');

  service.hooks(hooks);
}
