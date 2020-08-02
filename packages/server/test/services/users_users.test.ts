import app from '../../src/app';

describe('\'users_users\' service', () => {
  it('registered the service', () => {
    const service = app.service('users-users');
    expect(service).toBeTruthy();
  });
});
