import { describe, expect, it } from 'vitest';
import supertest from 'supertest';
import server from '../src/server';

const request = supertest(server);

describe('シークレット値を保存するための結合テスト', () => {
  it('should return an error if the body is not present in the request', async () => {
    const response = await request.post('/api/v1/secrets');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      name: 'RequestValidationError',
      message: 'Request body format is not valid',
    });
  });

  it('should return an error if the body does not have a secret', async () => {
    const response = await request.post('/api/v1/secrets').send({
      hello: 'hi!',
    });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      name: 'RequestValidationError',
      message: 'Request body format is not valid',
    });
  });

  it.todo('should return an error if the secret is not a string');

  it.todo('should return an error if the secret is too short');

  it.todo('should store a secret and return the UrlId');

  it.todo('should return an unhandled expection error');
});
