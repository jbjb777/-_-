const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Render 백엔드 정상 작동 중 🚀");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "안녕하세요!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("서버 실행:", PORT);
});
