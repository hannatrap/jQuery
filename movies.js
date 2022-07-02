let currentId = 0;
//list of movies
let moviesList = [];

$(function() {
//add the title and rating to the chart
$('#new-movie-form').on('submit', function(e) {
    e.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();

    let movieData = { title, rating};
    const HTMLtoAppend = createMovieDataHTML(movieData);

    currentId++
    moviesList.push(movieData);

    $("#movie-table-body").append(HTMLtoAppend);
    $("#new-movie-form").trigger("reset");
});

//make the delete button functional
$("tbody").on("click", ".btn.btn-danger", function(evt) {
    let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))
    
    moviesList.splice(indexToRemoveAt, 1)

    $(evt.target)
      .closest("tr")
      .remove();
    
  });


function createMovieDataHTML(data) {
  return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button class="btn btn-danger" data-delete-id=${data.currentId}>
          Delete
        </button>
      </td>
    <tr>
  `;
}})
