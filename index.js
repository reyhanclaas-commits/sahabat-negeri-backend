const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server aktif");
});

app.post("/chat", (req, res) => {
    res.json({
        reply: "AI aktif",
        risk: 0
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("server jalan");
});
