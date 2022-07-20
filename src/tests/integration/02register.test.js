const chai = require('chai');
const chaiHttp = require('chai-http');
const shell = require('shelljs');

const server = require('../../api/app');

const {
  newUser,
  invalidNewUser,
  invalidNewUserBody,
} = require('../mocks/registerMocks');

chai.use(chaiHttp);

const { expect } = chai;

describe('INTEGRATION TEST - Register Route - ENDPOINT /register', () => {
  let response = {};

  describe('1) - When Sucess', () => {
    before(async () => {
      response = await chai
        .request(server)
        .post('/register')
        .send(newUser);
      // console.log(response);
    });

    it('1) - should return a status code of 201', async () => {
      expect(response).to.have.status(201);
    });

    it('2) - should return a object', async () => {
      expect(response.body).to.be.a('object');
    });

    it('3) - should return a object with a token', async () => {
      expect(response.body).to.have.property('token');
      expect(response.body.token).to.be.a('string');
    });
  });

  describe('2) - When Fail', () => {
    describe('1) - If User already exists', () => {
      before(async () => {
        response = await chai
          .request(server)
          .post('/register')
          .send(invalidNewUser);
      });

      it('1) - should return a status code of 409', async () => {
        expect(response).to.have.status(409);
      });

      it('2) - should return a object', async () => {
        expect(response.body).to.be.a('object');
      });

      it('3) - should return a object with a error message', async () => {
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.equal('This email address is already in use');
      })
    });

    describe('2) - If body have invalid fields', () => {
      before(async () => {
        response = await chai
          .request(server)
          .post('/register')
          .send(invalidNewUserBody);
      });

      it('1) - should return a status code of 400', async () => {
        expect(response).to.have.status(400);
      });

      it('2) - should return a object', async () => {
        expect(response.body).to.be.a('object');
      });

      it('3) - should return a object with a error message', async () => {
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.equal('"email" must be a string');
      });
    });
  });
});
