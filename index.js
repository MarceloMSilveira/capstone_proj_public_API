// Import required modules
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Retrieve API key from environment variables
const apiKey = process.env.API_KEY;

// Create an Express application
const app = express();
const port = 3000;

// Middleware to parse URL-encoded data from form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// HTTP request logger middleware
app.use(morgan("dev"));

// GET route for the homepage
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// POST route to handle form submission and retrieve weather data
app.post("/", async (req, res) => {
  const userCity = req.body.userInput;

  try {
    // Construct API request URL with the provided city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}&_=${new Date().getTime()}`;
    console.log(`url: ${url}`);

    // Make HTTP GET request to OpenWeatherMap API
    const result = await axios.get(url, {
      headers: {
        "Accept": "application/json",
        "User-Agent": "Axios-Test-Request"
      }
    });

    // Extract weather description from API response
    const weatherDescription = result.data.weather[0].description;
    console.log(weatherDescription);

    // Render the result to the index.ejs template
    res.render("index.ejs", {
      weather: `The weather in ${userCity} is: ${weatherDescription}`
    });

  } catch (error) {
    // Render error message if request fails
    res.status(404).render("index.ejs", { error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
