const auth = require('./auth');
const express = require('express');
const app = express();
const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

app.use(auth);

app.use(express.static('public'));

// ルーティングの設定
app.get("/", (req, res) =>{
  res.sendFile(`${__dirname}/public/index.html`);
  console.log("/ へアクセスがありました");
});

// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

