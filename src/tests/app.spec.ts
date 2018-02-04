import * as request from 'supertest';
import * as app from '../app';

import { expect } from 'chai';

describe('Get /', () => {
  it('should return 404', (done) => {
    request(app).get('/')
      .expect(404, done);
  });
});

describe('Get /random-url', () => {
  it('should return 404', (done) => {
    request(app).get('/random-url')
      .expect(404, done);
  });
});
