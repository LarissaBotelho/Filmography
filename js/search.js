
$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText){
  axios.get('http://api.themoviedb.org/3/search/movie?query='+ searchText +'&api_key=b6aa9e3a5640442db50f18523bfcb52a')
  .then((response) => {
      console.log(response.data.results);
      let movies = response.data.results;
      let output = '';
      $.each(movies, (index,val) => {
          console.log(val);
          output += `
              <div class="col-10 col-sm-5 col-lg-3">
              <div class="row">                   
                  <div class="well text-center">
                      <img alt="poster" class="poster" src='https://image.tmdb.org/t/p/w185${val.poster_path}'/>
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

      $('.corpo').html(output);
  })
  .catch((err) => {
      console.log(err);
  });
}



// $(document).ready(() => {
//   let link = `https://api.themoviedb.org/3/movie/popular?api_key=b6aa9e3a5640442db50f18523bfcb52a&language=en-US&page=1`;
//   getMovies(link);
//   $('#searchForm').on('submit', (e) => {
//     let searchText = $('#searchText').val();
//     let link = `http://api.themoviedb.org/3/search/movie?api_key=b6aa9e3a5640442db50f18523bfcb52a&query=${searchText}`;
//     getMovies(link);
//     e.preventDefault();
//   });

// });


// /*function getMovies(searchText){
//   axios.get('http://api.themoviedb.org/3/search/movie?api_key=b6aa9e3a5640442db50f18523bfcb52a&query='+ searchText)
//   .then(getFilmes)
//   .catch((err) => {
//       console.log(err);
//   });
// }*/

// function getMovies(link) {
//   axios.get(link)
//     .then(getCards)
//     .catch((err) => {
//       console.log(err);
//     });
// }

// function getCards(response) {
//   console.log(response.data.results);
//   let movies = response.data.results;
//   let output = '';
//   $.each(movies, (index, val) => {
//     console.log(val);
//     output += `
//               <div class="col-10 col-sm-5 col-lg-3">
//                   <div class="row">                   
//                       <div class="well text-center">
//                           <img alt="poster" class="poster" src='https://image.tmdb.org/t/p/w185${val.poster_path}'/>
//                       </div>
//                   </div>                  
//                   <div class="row">
//                       <h5>${val.title}</h5>
//                   </div>
//                   <div class="row">
//                   <h6>${val.release_date}</h6>
//                   </div>
//                   <div class="row">
//                       <a onclick="movieSelected('${val.id}')" class="btn btn-primary" href="#">Mais informações</a>
//                   </div>                  
//               </div>
//           `;
//   });

//   $('#movies').html(output);
// }


// //script modal

// //Função para chamar o modal
// $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Botão que acionou o modal
//   var recipient = button.data('whatever') // Extrai informação dos atributos data-*
//   // Se necessário, você pode iniciar uma requisição AJAX aqui e, então, fazer a atualização em um callback.
//   // Atualiza o conteúdo do modal. Nós vamos usar jQuery, aqui. No entanto, você poderia usar uma biblioteca de data binding ou outros métodos.
//   var modal = $(this)
//   modal.find('.modal-title').text('Nova mensagem para ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// })

// /*Entrada da Função Senha*/
// document.getElementById('olho').addEventListener('mousedown', function() {
//   document.getElementById('senha').type = 'text';
// });

// document.getElementById('olho').addEventListener('mouseup', function() {
//   document.getElementById('senha').type = 'password';
// });

// // Para que o password não fique exposto apos mover a imagem.
// document.getElementById('olho').addEventListener('mousemove', function() {
//   document.getElementById('senha').type = 'password';
// });