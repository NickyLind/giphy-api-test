import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import FindGifs from './js/giphy-api.js'

function clearResults() {
  $('.output').empty();
  $('#search').val("");
}

$(document).ready(function() {
  $("#trending").click(function()  {
    clearResults();
    let promise = FindGifs.getGifTrending();
    promise.then(function(response) {
      const body = JSON.parse(response);
      const myArray = [0,1,2,3,4];
      for (let i = 0; i < myArray.length; i++)  {
        $('.output').append(`<img width="300" height="300" src="${body.data[i].images.original.url}">`);
      }
    });
  });
  
  $('#gifSearcher').click(function() {
    const image = $('#search').val();
    clearResults();
    let promise = FindGifs.getGifSearch(image);
    promise.then(function(response) {
      const body = JSON.parse(response);
      const myArray = [0, 1, 2, 3, 4];
      for (let i = 0; i < myArray.length; i++) {
        $('.output').append(`<img width="300" height="300" src="${body.data[i].images.original.url}">`);
      }
    });
  });
    
  $('#random').click(function() {
    clearResults();
    let promise = FindGifs.getGifRandom();
    promise.then(function(response){
      const body = JSON.parse(response);
      $('.output').append(`<img width="300" height="300" src="${body.data.images.original.url}">`);
    });
  });
});
  // $('#publish').click(function() {
  //   const image = $('#upload').val();
    

  //   let request = new XMLHttpRequest(); 
  //   const url = `https://upload.giphy.com/v1/gifs?api_key=${process.env.API_KEY}&source_image_url=${image}`

  //   request.onreadystatechange = function() {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const response = JSON.parse(this.responseText);
  //       getElements(response);
  //     }
  //   };
  //   request.open("POST", url, true);
  //   request.send();

  // });