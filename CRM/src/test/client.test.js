const request = require('supertest');
const app = require('../src/app');

describe('Teste Cliente CRUD', () => {
  it('Deve listar clientes', async () => {
    const res = await request(app).get('/clientes');
    expect(res.statusCode).toBe(200);
  });
});
