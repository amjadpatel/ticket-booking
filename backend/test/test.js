
// Register babel
require('babel-register');
var chai = require('chai');
var chaiHttp = require('chai-http')
var should = chai.should();
chai.use(chaiHttp);
var server =  require('../server.js');
var host = 'http://localhost:5000';
var User = require('../app/models').User

//Our parent block
describe(`Ration`, () => {
    describe(`/GET get-ration`, () => {
        it(`it should GET all the booked seat`, (done) => {
        chai.request(host)
          .get(`/api/book/get-book`)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a(`object`);
                res.body.data.should.be.a('array');

                done();
             });
          });
     });
     describe('/POST User add-user', () => {
      it('it should Add user details and booking details', (done) => {
          let ration = {
               name: "UserName",
               email: "user@email.com",
               seat_no:1
            
          }
            chai.request(host)
            .post(`/api/user/add-user-seat`)
            .send(ration)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.data.should.have.property('name');
                  res.body.data.should.have.property('email');
                  
              done();
            });
      });
    });


  
   });

 
