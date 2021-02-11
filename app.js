const express = require("express");
const morgan = require("morgan");
const { client } = require("./db");

const theMen = require("./theMen");
const bfDetails = require("./boyfriendDetails");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

const baseQuery =
  "SELECT top_5.id, top_5.name AS boyfriend, mugshot, job, actor, breakup_reason FROM top_5 JOIN details ON details.boyfriend_id = top_5.id\n";

app.get("/", async (req, res, next) => {
  try {
    const data = await client.query(baseQuery);
    const bfs = data.rows;
    res.send(theMen(bfs));
  } catch (err) {
    next(err);
  }
});

app.get("/boyfriends/:id", async (req, res, next) => {
  try {
    let data = await client.query(baseQuery + "WHERE top_5.id = $1", [
      req.params.id,
    ]);
    const detail = data.rows[0];
    data = await client.query(
      `SELECT * FROM episodes WHERE boyfriend_id = $1`,
      [req.params.id]
    );
    const episodes = data.rows;
    res.send(bfDetails({ detail, episodes }));
  } catch (err) {
    next(err);
  }
});

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`listening in port ${port}`));
