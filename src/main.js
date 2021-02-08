import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#gifSearcher').click(function() {
    const image = $('#search').val();
    $('#search').val("");

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
      $('.output').append(`<img src="${response.data[0].embed_url}"></img>`);
      //$('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});