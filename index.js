import express from "express";
import axios from "axios";
import bodyParser, { urlencoded } from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/",(req,res)=>{
  res.render("index.ejs",{test:"working ok!"})
})

app.listen(port,()=>{
  console.log(`Serving running on port: ${port}`);
})


