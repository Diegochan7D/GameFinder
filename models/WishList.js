'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var wishListSchema = Schema( {
  userId: ObjectId,
  gameId: ObjectId,
} );

module.exports = mongoose.model( 'WishList', wishListSchema );