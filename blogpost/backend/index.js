const express = require('express');
const app = express();
const cors = require('cors')
const {comments} = require('./models/comments')

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({extended:false}))
app.use(cors())
const host = '127.0.0.1';
const port = 9000;
app.listen(port, () => {
    console.log(`Server running:  http://${host}:${port}`);
});

// POST request
app.post('/submit-comment', (req, res) => {
    // Create a random ID if the incoming data doesn't have one
    req.body.id = req.body.id || generateRandomId();
    comments.push(req.body);
    res.send(req.body); 
});

// GET request
app.get('/comments', (req, res) => {
    const commentsHTML = comments.map(comment => `
        <div class='comment' id='comment-${comment.id}'>
            <p><strong>${comment.author}</strong> - ${comment.date}</p>
            <p>${comment.comment}</p>
        </div>
    `).join('');
    res.send(commentsHTML);
});


function generateRandomId() {
    // return Math.random().toString(36).substr(2, 8);
    let id = Math.floor(Math.random() * 9000);
    return id;
}