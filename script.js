async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "b1e8462d674c216430a586ef7ec7a019";

    document.getElementById("loading").innerHTML = "Loading...";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();
        document.getElementById("loading").innerHTML = "";

        if (data.cod == 200) {

            const weatherType = data.weather[0].main;

            // Change background based on weather
            if (weatherType == "Clear") {
                document.body.style.background = "linear-gradient(to right, #fbc2eb, #a6c1ee)";
            } 
            else if (weatherType == "Rain") {
                document.body.style.background = "linear-gradient(to right, #4e54c8, #8f94fb)";
            } 
            else {
                document.body.style.background = "linear-gradient(to right, #4facfe, #00f2fe)";
            }

            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}</h2>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                <p><strong>${data.weather[0].description}</strong></p>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>🤒 Feels Like: ${data.main.feels_like} °C</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } 
        else {
            document.getElementById("weatherResult").innerHTML =
                "<p style='color:red;'>City not found!</p>";
        }

    } catch (error) {
        document.getElementById("weatherResult").innerHTML =
            "<p style='color:red;'>Error fetching data.</p>";
    }
}

// Enter key support
document.getElementById("cityInput")
.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});