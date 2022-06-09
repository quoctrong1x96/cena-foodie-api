process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let httpServer = require('../app.js');
let should = chai.should();


chai.use(chaiHttp);

describe('auth', () => {
    beforeEach((done) => {
        //!Do somethings
    });
    describe('/POST Login email', () => {
        it('It will login successful with token in response', (done) => {
            let user = {
                email: "cenafoodie@gmail.com",
                password: "Cena@123"
            }
            chai.request(httpServer)
                .post('/api/v1/auth/login-email')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('token');
                    res.body.should.have.property('store');
                    res.body.should.have.property('user');
                    res.body.should.have.property('user') = true;
                    done();
                });
        });
    });
});