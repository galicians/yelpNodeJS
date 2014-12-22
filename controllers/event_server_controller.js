
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

exports.findSingle = function(req, res){
    EventModel.findById(req.params.id, function(err, data){
        if(err){
            res.send(500);
        } else {
            if(data){
                res.send(200, data);
            } else {
                res.send(404);
            }
        }
    });
};