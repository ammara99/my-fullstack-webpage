app.get('/weather', async (req, res) => {
  const city = req.query.city || 'London';  // Default to 'London' if no city is provided
  try {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`;
    const response = await axios.get(apiURL);
    
    const weatherData = {
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed
    };
    
    res.json({
      status: 'success',
      data: weatherData
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Unable to fetch weather data' });
  }
});
