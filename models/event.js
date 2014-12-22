
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    EventSchema = new Schema({
        ratings : []
});

EventSchema.methods.getTotalRating = function(){
    var totalRatings = 0;

    for(var i = 0; i < this.ratings.length; i++) {
        totalRatings += this.ratings[i].rating;
    }

    return totalRatings;
};

EventSchema.methods.calculateAverageRating = function(){
    var totalRatings = this.getTotalRating();

    if(this.ratings.length > 0) {
        this.averageRating = totalRatings / this.ratings.length;
    } else {
        this.averageRating = 0;
    }
};

EventSchema.pre('save', function(next){
    this.calculateAverageRating();

    next();
});

module.exports = mongoose.model('Event', EventSchema);