

var controller = require('../controllers/event_server_controller');
var mongoose  = require('mongoose');
var EventModel = mongoose.model('Event');

describe("Event Controller", function() {
    var req;
    var res;
    var statusCode;
    var sentData;

    beforeEach(function(){
        res = {
            send: function(code, data){
                statusCode = code;
                sentData = data;
                }
            };
  

        EventModel.find = function(callback){
            callback(null, [{name: 'event1'}]);
        };
    });

    describe("When fetching all events", function(){

        it("should return 200", function(){
            controller.getAllEvents(req, res);
            statusCode.should.equal(200);
        });

        it("should send back data", function(){
            controller.getAllEvents(req, res);
            sentData[0].name.should.equal('event1');
        });

        it("should return 500 when find errors", function(){
            EventModel.find = function(callback){
                callback({err: 1}, null);
            };

            controller.getAllEvents(req, res);
            statusCode.should.equal(500);
        });
    });

    describe("When fetching a single event", function(){
        beforeEach(function() {
            req = { 
                params : {
                id : 1
                }
            };
        });

        it("should return 404 when not found", function(){
            EventModel.findById = function(id, callback){
                callback(undefined,undefined);
            };
            controller.findSingle(req, res);
            statusCode.should.equal(404);
        });

        it("should return 500 when find errors", function(){
            EventModel.findById = findById = function(id, callback){
                callback({err:1}, undefined);
            };
            controller.findSingle(req, res);
            statusCode.should.equal(500);
        });

        it("should return data when successful", function(){
            EventModel.findById = function(id, callback){
                callback(undefined, {id: id, name: 'Test Event'});
            };
            controller.findSingle(req, res);
            sentData.id.should.equal(1);
        });
    });
});