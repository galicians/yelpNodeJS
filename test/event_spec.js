var should = require('should');
var Model = require('../models/event');

describe("Event model", function() {

    it("should have an array of ratings", function(){
        var event = new Model();
        event.ratings.should.not.equal(undefined);
    });

    describe("when ssaving event", function(){
        it("should calculate average rating", function(){
            Model.prototype.save = function(callback){
                callback();
            };
            var event = new Model({
                ratings: [{
                    rating: 1
                }, {
                    rating: 2
                }]
            });

            event.save(function(){
                event.averageRating.should.equal(1.5);
            });
        });
    });

});