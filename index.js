import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Retrieve API key from environment variables
const apiKey = process.env.API_KEY;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/",(req,res)=>{
  res.render("index.ejs")
});

app.post("/", async (req,res)=>{
  const userCity = req.body.userInput;
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}&_=${new Date().getTime()}`;
    console.log(`url: ${url}`);
    const result = await axios.get(url,{
      headers: {
          "Accept": "application/json",
          "User-Agent": "Axios-Test-Request"
      }
  });
    const weatherDescription = result.data.weather[0].description;
    console.log(weatherDescription);
    res.render("index.ejs",{weather :`The weather in ${userCity} is : ${weatherDescription}`});
  } catch (error) {
    res.status(404).render("index.ejs",{error:error.message});
  }
});

app.listen(port,()=>{
  console.log(`Serving running on port: ${port}`);
});


