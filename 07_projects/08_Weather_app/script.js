async function getWeather() {
  const location = document.getElementById('locationInput').value;
  const apiKey = '8e3533cffc144f59863190203242006';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Location not found");
    
    const data = await res.json();
    const temp = data.current.temp_c;
    const city = data.location.name;
    const country = data.location.country;

    document.getElementById('weatherResult').innerHTML =
      `🌍 ${city}, ${country}<br>🌡️ Temperature: ${temp}°C`;
  } catch (err) {
    document.getElementById('weatherResult').innerHTML = `Error: ${err.message}`;
  }
}
