const mongoose = require( 'mongoose' );
const validator = require( 'validator' );

const blogSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },


} );


//creating and exporting collection

module.exports = new mongoose.model( 'Blog', blogSchema );
