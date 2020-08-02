import app from '../../src/app';

describe('\'chatrooms\' service', () => {
  it('registered the service', () => {
    const service = app.service('chatrooms');
    expect(service).toBeTruthy();
  });
});
