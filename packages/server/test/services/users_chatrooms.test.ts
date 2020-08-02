import app from '../../src/app';

describe('\'users_chatrooms\' service', () => {
  it('registered the service', () => {
    const service = app.service('users-chatrooms');
    expect(service).toBeTruthy();
  });
});
