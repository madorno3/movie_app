

$('#submit').on('click', function(){
    
    let title = $('#title').val();
    let rating = $('#rating').val();

    $('#movieList').append(`<li>${title} .............. ${rating}        <button>Delete</button></li>`)

    $('ul').on("click", "li button", e => $(e.target).closest('li').remove());

    })
    

//BUTTON TO REMOVE TITLE AND RATING
// $('button id').on('click', function(){
//   $(this).remove()
// })