
var mongoose = require('mongoose');

var Model = require('../models/event');

var EventModel = mongoose.model('Event');

exports.getAllEvents = function(req, res){
    EventModel.find(function(err,data){
        if(err){
            res.send(500);
        }else{
            res.send(200, data);
        }
        
    });
};