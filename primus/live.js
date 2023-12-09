module.exports.go = (server) => {
  const primus = require("primus")(server, {
    transformer: "websockets",
  });

  primus.on("connection", (spark) => {
    console.log("connected 🔥");
    spark.on("data", (data) => {
      if (data.action === "newResult") {
        console.log("data received: ", data);
        primus.write({ action: "newResult", data: data });
      }
    });
  });
};
