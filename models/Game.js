'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

const gameSchema = new Schema( {
    name: String,
    release_date: String,
    price: Number,
    short_description: String,
    metacritic_score: Number,
    recommendations: Number,
    developers: Mixed,
} );

module.exports = mongoose.model( 'Game', gameSchema );