const expect = require('chai').expect;
const request = require('request');

// testing each endpoint

it('Weather Page Content',function(done){
    request('http://localhost:3000/weather',function(error,response,body){
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('About Page Content',function(done){
    request('http://localhost:3000/about',function(error,response,body){
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Help Page Content',function(done){
    request('http://localhost:3000/help',function(error,response,body){
        expect(response.statusCode).to.equal(200);
        done();
    });
});
