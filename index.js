const express = require(`express`);
const cors = require(`cors`);
const dotenv = require(`dotenv`);
const { testconection } = require("./Database/db.js");
const  Router  = require("./router/index.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(Router);

app.listen(process.env.APP_PORT, async () => {
    await testconection();
    console.log(`Server is running on http://localhost:${process.env.APP_PORT}`); 
}); 