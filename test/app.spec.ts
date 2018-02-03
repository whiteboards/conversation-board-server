import * as request from 'supertest';
import * as app from '../src/app';

import { expect } from 'chai';

describe('Get /', () => {
  it('should return 200', (done) => {
    request(app).get('/')
      .expect(200, done);
  });
});

describe('Get /random-url', () => {
  it('should return 404', (done) => {
    request(app).get('/random-url')
      .expect(404, done);
  });
});