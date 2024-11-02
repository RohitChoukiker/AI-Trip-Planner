const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Rohit Choukiker");
});

app.listen(PORT, () => {
    console.log(`Server is running at Port ${PORT}`);
});
