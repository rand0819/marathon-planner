// var movieApi = {
//   key: 'f2e5add79221379cbdfc8bd98daf758e',
//   getMovie: function (title) {
//     var URL =
//       'https://api.themoviedb.org/3/search/movie?api_key=' +
//       this.key +
//       '&query=' +
//       title;
//     return $.ajax({
//       type: 'GET',
//       url: URL
//     });
//   },
//   getSimilar: function (movieId) {
//     var URL =
//       'https://api.themoviedb.org/3/movie/' +
//       movieId +
//       '/similar?api_key=' +
//       this.key +
//       '&language=en-US&page=1';
//     return $.ajax({
//       type: 'GET',
//       url: URL
//     });
//   },
//   getNowPlaying: function () {
//     var URL =
//       'https://api.themoviedb.org/3/movie/now_playing?api_key=' +
//       this.key +
//       '&language=en-US&page=1';
//     return $.ajax({
//       type: 'GET',
//       url: URL
//     });
//   },
//   getByGenre: function (term) {
//     var genreId;
//     for (let i = 0; i < genres.length; i++) {
//       if (genres[i].name === term) {
//         genreId = genres[i].id;
//       }
//     }
//     var URL =
//       'https://api.themoviedb.org/3/discover/movie?api_key=' +
//       this.key +
//       '&language=en-US&sort_by=popularity.desc&include_video=false&page=1' +
//       '&with_genres=' +
//       genreId;
//     return $.ajax({
//       type: 'GET',
//       url: URL
//     });
//   },
//   getById: function (id) {
//     var URL =
//       'https://api.themoviedb.org/3/movie/' +
//       id +
//       '?api_key=' +
//       this.key +
//       '&language=en-US';
//     return $.ajax({
//       type: 'GET',
//       url: URL
//     }).then(function (data) {
//       res.json(data);
//     });
//   }
// };

// // API key: f2e5add79221379cbdfc8bd98daf758e
// // This finds a movie by title: https://api.themoviedb.org/3/search/movie?api_key=f2e5add79221379cbdfc8bd98daf758e&query=[title]
// // This finds similar movies based on a single film (selected by TMDB id): https://api.themoviedb.org/3/movie/[movie id]550/similar?api_key=f2e5add79221379cbdfc8bd98daf758e&language=en-US&page=1
// // Movie id path within movie json: results[i].id
// // Movie poster path: https://image.tmdb.org/t/p/w600_and_h900_bestv2/ + results[i].poster_path
// // this URL has many useful queries to incorporate: https://api.themoviedb.org/3/discover/movie?api_key=f2e5add79221379cbdfc8bd98daf758e&language=en-US&sort_by=popularity.desc&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28

// // console.log("Getting history");
// // var movieHist = [];
// // var userId = "1"; //get user id
// // $.ajax("/api/history/"+ userId).then(function(data) {
// //   console.log("poop");
// //   for (let i = 0; i < data.length; i++) {
// //     var id = data[i].movieId;
// //     //movieApi.getById(id).then(function(data) {
// //     //  movieHist.push(data);
// //     //})
// //     response.json(movieApi.getById(id));
// //   }
// // });

// module.exports = movieApi;
