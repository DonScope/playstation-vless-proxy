const express = require("express");
const request = require("request");
const app = express();

const target = "https://gs2.ww.prod.dl.playstation.net";

app.use("/", (req, res) => {
  const url = target + req.url;
  req.pipe(request({
    url,
    headers: {
      host: "gs2.ww.prod.dl.playstation.net",
      "user-agent": req.headers["user-agent"]
    },
    rejectUnauthorized: false
  })).pipe(res);
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log("Proxy listening on port", port));