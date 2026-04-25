const express = require("express");
const app = express();

app.use(express.json());

// AI sederhana
function aiResponse(msg){
    return "AI: saya memahami pesan kamu";
}

// risk system
function riskEngine(text){
    let score = 0;
    if(text.includes("ancam")) score += 50;
    if(text.includes("hina")) score += 20;
    return score;
}

// API chat
app.post("/chat", (req, res) => {
    const msg = req.body.message;

    res.json({
        reply: aiResponse(msg),
        risk: riskEngine(msg)
    });
});

// server jalan
app.listen(3000, () => {
    console.log("server aktif");
});
