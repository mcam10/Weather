const expect = require('chai').expect;
const request = require('request');

it('Weather Page Content',function(done){
    request('http://localhost:3000/weather',function(error,response,body){
        expect(response.statusCode).to.equal(200);
        done();
    });
});