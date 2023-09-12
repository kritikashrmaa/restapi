const express = require( "express" );
const router = express.Router();

const {
    getAllBlogs,
    putBlog,
    updateBlog,
    deleteBlog,
}
    = require( "../controllers/blogs" );

//.route-->it allows you to define multiple HTTP methods
router.route( "/" ).get( getAllBlogs );                 //get all the blogs
router.route( "/post" ).post( putBlog );                // add a blog post
router.route( '/update/:postId' ).patch( updateBlog );    // update a blog post
router.route( '/delete/:postId' ).delete( deleteBlog ); // deleting the blog


module.exports = router;


