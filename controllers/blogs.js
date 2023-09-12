
const Blog = require( '../models/blog' )


//read the blogs
const getAllBlogs = async ( req, res ) => {

    const mydata = await Blog.find( {} );
    res.status( 200 ).json( {
        mydata
    } )
};

//add a new blog
const putBlog = async ( req, res ) => {
    try
    {



        const newBlog = new Blog( req.body );
        const savedPost = await newBlog.save();
        res.status( 201 ).send( savedPost );
        console.log( "success" )

    } catch ( err )
    {
        res.status( 400 ).send( err );
    }
}

//updating the blogs
const updateBlog = async ( req, res ) => {

    try
    {

        const postId = req.params.postId;
        console.log( postId );
        const { title, desc } = req.body;
        const existingPost = await Blog.findById( postId );

        if ( !existingPost )
        {
            return res.status( 404 ).json( { error: 'Blog post not found' } );
        }


        existingPost.title = title;
        existingPost.desc = desc;


        const updatedPost = await existingPost.save();


        res.status( 200 ).send( updatedPost );


    } catch ( err )
    {
        console.log( err );
    }

}

//deleting the blogs
const deleteBlog = async ( req, res ) => {

    try
    {
        // Extract the post ID from the request parameters
        const postId = req.params.postId;

        // Find the blog post by ID in the database
        const existingPost = await Blog.findById( postId );

        if ( !existingPost )
        {
            return res.status( 404 ).json( { error: 'Blog post not found' } );
        }

        // Delete the blog post from the database
        await existingPost.remove();

        // Respond with a success message
        res.status( 204 ).send();
    } catch ( error )
    {
        console.error( 'Error deleting blog post:', error );
        res.status( 500 ).json( { error: 'Internal Server Error' } );
    }
}





module.exports = { getAllBlogs, putBlog, updateBlog, deleteBlog };


