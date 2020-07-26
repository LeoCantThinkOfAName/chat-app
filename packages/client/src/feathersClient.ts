import feathers from '@feathersjs/feathers';
import authentication from '@feathersjs/authentication-client';
import rest from '@feathersjs/rest-client';

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT as string;

const app = feathers();
const restClient = rest(apiEndpoint)
app.configure(authentication());
app.configure(restClient.fetch(window.fetch));

export {
  app, restClient
}