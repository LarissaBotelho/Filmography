/*Entrada do Slide*/
$('.carousel').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
});


//   window.onload = function getfilme(){
//     axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b6aa9e3a5640442db50f18523bfcb52a&sort_by=popularity.desc&page=1')
//     .then((response) => {
//         console.log(response.data.results);
//         let generos = response.data.results;
//         let output = '';
//         $.each(generos, (index,val) => {
//             console.log(val);
//             output += `
//             <div class="col-10 col-sm-5 col-lg-3">
//                   <div class="row">                   
//                       <div class="well text-center">
//                         <a>
//                         <img id="${val.id}" alt="poster" class="poster" src='https://image.tmdb.org/t/p/w185${val.poster_path}' onclick="favoritar('${val.id}')"/>
//                         </a>
//                       </div>
//                   </div>                  
//                   <div class="row">
//                       <h5>${val.title}</h5>
//                   </div>
//                   <div class="row">
//                   <h6>${val.release_date}</h6>
//                   </div>
//                   <div class="row">
//                     <a onclick="favoritar('${val.id}')" class="btn btn-primary" href="#">Favoritar</a>
//                     <a onclick="movieSelected('${val.id}')" class="btn btn-primary" href="https://www.themoviedb.org/movie/${val.id}" target="blank">Mais informações</a>
//                     </div>
                  
//               </div>

//             `;
//         });
  
//         $('.imagem1').html(output);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
//   }

//   function favoritar() {
//     var imagem = document.getElementById(val.id)
//     console.log(imagem)
// }