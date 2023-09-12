
require( "dotenv" ).config();
//import the express.js framework
const express = require( "express" );

//creates an express application
const app = express();

//connecting our mongo database
const connectDB = require( './db/connect' );

//defining a PORT 
const PORT = process.env.PORT || 5000;

const blogs_routes = require( './routes/blogs' );
const Blog = require( './models/blog' );

// Define a route handler for the root path
app.get( '/', ( req, res ) => {
    res.send( 'Hello, Express!' );
} );

app.use( express.json() );

//middleware or to set router
app.use( "/api/blogs", blogs_routes )


const start = async () => {
    try
    {
        
        await connectDB(process.env.MONGODB_URL);
        app.listen( PORT, () => {
            console.log( `${PORT} yes i'm connected` );
        } );
        
    } catch ( err )
    {
        console.log( err );
    }
}

start();

