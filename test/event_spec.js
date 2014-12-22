var should = require('should');
var Model = require('../models/event');

describe("Event model", function() {
    it("should have an array of ratings", function(){
        var event = new Model({});
        event.ratings.should.not.equal(undefined);
    });
});