import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("#trending").click(function()  {
    $('.output').empty();
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/trending?&api_key=${process.env.API_KEY}&limit=5`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    function getElements(response)  {
      const myArray = [0,1,2,3,4];
      for (let i = 0; i < myArray.length; i++)  {
        $('.output').append(`<img width="300" height="300" src="${response.data[i].images.original.url}">`);
      }
    }
  });
  
  $('#gifSearcher').click(function() {
    const image = $('#search').val();
    $('#search').val("");
    $('.output').empty();

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?q=${image}&api_key=${process.env.API_KEY}&limit=5`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      const myArray = [0, 1, 2, 3, 4];
      for (let i = 0; i < myArray.length; i++) {
        $('.output').append(`<img width="300" height="300" src="${response.data[i].images.original.url}">`);
      }
    }
  });
  $('#random').click(function() {
    $('.output').empty();
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/random?&api_key=${process.env.API_KEY}&limit=5`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    function getElements(response)  {
      $('.output').append(`<img width="300" height="300" src="${response.data.images.original.url}">`);
    }
  });
});