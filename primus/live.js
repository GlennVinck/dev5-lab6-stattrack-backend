module.exports.go = (server) => {
  const primus = require("primus")(server, {
    transformer: "websockets",
  });

  primus.on("connection", (spark) => {
    console.log("connected 🔥");
    spark.on("data", (data) => {
      if (data.action === "newStat") {
        console.log("data received: ", data.data);
        primus.write({ action: "newStat", data: data.status.data });
      }
    });
  });
};
