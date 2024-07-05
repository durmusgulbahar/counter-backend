import app from '../index';
import server from '../server'
import request from "supertest";
afterAll((done) => {
    server.close(done);  // Ensure the server is closed after tests
  });
  
describe('GET /api/test', () => {
    it('should return Test', async () => {
      const res = await request(app).get('/api/test');
      expect(res.status).toBe(200);
      expect(res.body.msg).toEqual('Test');
    });
  });