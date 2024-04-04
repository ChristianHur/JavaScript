
$(document).ready(function() {

    const url = 'http://127.0.0.1:9000';
    $('#comment-form').submit(function(event) {

        event.preventDefault();

        let commentData = {
            author: $('#author').val(),
            date: new Date().toLocaleString(),
            comment: $('#comment').val(),
        };

        $.ajax({
            url: url + '/submit-comment', 
            data: commentData,
            type: 'POST',
            success: function(newComment){
                let commentHTML = `
                <div class="comment" id="comment-${newComment.id}">
                    <p><strong>${newComment.author}</strong> - ${newComment.date}</p>
                    <p>${newComment.comment}</p>
                </div>`;
                //$('#comments').append(commentHTML);
                $('#comment-form').trigger('reset');  //clear form
            },
            error: function(err){
                console.log('ERROR:',err)
            }
        });

    });


    setInterval( ()=>{
        loadComments()
    }, 2000)

    function loadComments(){
        $.get(url + '/comments', (commentsHTML)=>{
            $('#comments').html(commentsHTML);
        })
    }

});