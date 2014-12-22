

var controller = require('../controllers/event_server_controller');

describe("Event Controller", function() {
    describe("When fetching all events", function(){
        var req;
        var res;
        var statusCode;
        var sentData;

        res = {
            send: function(code, data){
                statusCode = code;
                sentData = data;
            }
        };

        it("should return 200", function(){
            controller.getAllEvents(req, res);
            statusCode.should.equal(200);
        });

        
    });
});