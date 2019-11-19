$(document).ready(() => {
    getMovies()

});
function buildMovies(movies) {
    let output = '';
    $.each(movies, (index, val) => {
        console.log(val);
        output += `
                  <div class="col-10 col-sm-5 col-lg-3">
                      <div class="row">                   
                          <div class="well text-center">
                            <a>
                            <img id="${val.id}" alt="poster" class="poster" src='https://image.tmdb.org/t/p/w185${val.poster_path}' onclick="favoritar('${val.id}')"/>
                            </a>
                          </div>
                      </div>                  
                      <div class="row">
                          <h5>${val.title}</h5>
                      </div>
                      <div class="row">
                      <h6>${val.release_date}</h6>
                      </div>
                      <div class="row">
                        <a onclick="movieSelected('${val.id}')" class="btn btn-primary" href="https://www.themoviedb.org/movie/${val.id}" target="blank">Mais informações</a>
                        </div>
                      
                  </div>
              `;
    });

    $('#favoriteMovies').html(output);
}

function getMovies() {
    var movies = localStorage.getItem('favMovies')
    movies = JSON.parse(movies)
    buildMovies(movies)
}
