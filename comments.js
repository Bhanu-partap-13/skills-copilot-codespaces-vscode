//create a web server
// controllers/commentController.js

// In-memory storage for comments (usually, you'd use a database in a real-world app)
const comments = [
    { id: 1, text: "This is the first comment!" },
    { id: 2, text: "This is the second comment!" },
];

// Controller function to show all comments
exports.comment_list = (req, res) => {
    res.json(comments); // Return all comments in JSON format
};

// Controller function to show the form to create a new comment
exports.comment_create_get = (req, res) => {
    // A simple HTML form to create a comment
    res.send(`
        <form method="POST" action="/comments/create">
            <input name="text" type="text" placeholder="Enter your comment" required />
            <button type="submit">Create Comment</button>
        </form>
    `);
};

// Controller function to create a new comment (when form is submitted via POST)
exports.comment_create_post = (req, res) => {
    const { text } = req.body;  // Get the comment text from the form submission
    const newComment = { id: comments.length + 1, text };  // Create a new comment object
    comments.push(newComment);  // Add it to the comments array
    res.redirect('/comments');  // Redirect to the comments list page
};

// Controller function to delete a comment by ID
exports.comment_delete = (req, res) => {
    const { id } = req.params;  // Get the comment ID from the URL
    const index = comments.findIndex(comment => comment.id === parseInt(id));  // Find the comment in the array

    if (index !== -1) {
        comments.splice(index, 1);  // Remove the comment from the array
        res.redirect('/comments');  // Redirect to the comments list page
    } else {
        res.status(404).send('Comment not found');  // If comment not found, send 404 error
    }
};
