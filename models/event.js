
var Event = function(args) {
    var event = {};

     event.ratings = args.ratings || [1,2,3]; 
     
     return event;
};


module.exports = Event;