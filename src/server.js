import express from 'express';
const app = express();
require('dotenv').config();

port = 3000

app.get("/", (req, res) => {
res.send("Data recieved successfully from the server");
});


app.listen(port || process.env.PORT, () => {
    console.log(`Server is running on port ${port || process.env.PORT}`)
});