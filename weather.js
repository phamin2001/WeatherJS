class Weather {
  constructor(city, state) {
    this.apiKey = 'd48268faf2d3dfedc5336e5911fa0061';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API:
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.main;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
