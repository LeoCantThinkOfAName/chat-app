import app from '../../src/app';

describe('\'usersUsers\' service', () => {
  it('registered the service', () => {
    const service = app.service('users-users');
    expect(service).toBeTruthy();
  });
});
