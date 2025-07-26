const {model} = require("mongoose");

const {WatchlistSchema} = require('../schemas/WatchlistSchema');

const WatchlistModel =  new model('position' , WatchlistSchema);

module.exports= {WatchlistModel};