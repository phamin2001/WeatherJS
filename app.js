// Init weather object
const weather = new Weather('Denver', 'Colorado');

// Init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
      // console.log(results);

    })
    .catch(err => console.log(err));
}
