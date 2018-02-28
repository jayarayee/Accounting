const expect = require('expect');
const request = require('supertest');

const { app} = require('./../server');
const {Account} = require('./../Account');

beforeEach((done) =>{
    Account.remove({}).then(() =>{
        done()
    });
});

describe('POST/account', ()=>{
    it('should create a new accout', (done) =>{
        var text = 'Test account text';

        request(app)
        .post('/account')
        .send({text})
        .expect(200)
        .expect((res) =>{
            expect(res.body.text).toBe(text);
        })
        .end((err) =>{
            if(err){
                return done(err);
            }
            Account.find().then((Aaccount) =>{
                expect(account.length).toBe(1);
                expect(account[0].text).toBe(text);
            }).catch((e) => done(e));
        });
    });
        
    
});