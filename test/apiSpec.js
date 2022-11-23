var assert = require('assert');
var sinon = require('sinon');
var MockReq = require('mock-req');
var MockRes = require('mock-res');
var http = require('http');
 
var api = require('../test/api');
 
describe('api', function() {
  beforeEach(function() {
    this.request = sinon.stub(http, 'request');
  });
 
  afterEach(function() {
    http.request.restore();
  });
 
 
  it('should convert get result to object', function(done) {
    var expected = { status: 'Ok' };
    var response = new MockRes();
    response.write(JSON.stringify(expected));
    response.end();
   
    var request = new MockReq();
   
    this.request.callsArgWith(1, response)
                .returns(request);
   
    api.get(function(err, result) {
      assert.deepEqual(result, expected);
      done();
    });
  });
 
});