require( "dotenv" ).config();

const connectDB = require( './db/connect' );
const Blog = require( './models/blog' );

const blogsjson = require( './blogs.json' );

const start = async ()=>{

    try
    {
        console.log("blogs json connected")
        await connectDB( process.env.MONGODB_URL );
        await Blog.create( blogsjson );

         
    } catch ( err )
    {
        console.log( err );
     }
    
}

start();