class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    // this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.tempMin = document.getElementById('w-temp-min');
    this.tempMax = document.getElementById('w-temp-max');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp + ' (f)';
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.tempMin.textContent = `Minimum Temp: ${weather.main.temp_min} (f)`;
    this.tempMax.textContent = `Maximum Temp: ${weather.main.temp_max} (f)`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
  
  }
}
