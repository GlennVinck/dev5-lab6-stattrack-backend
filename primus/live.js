module.exports.go = (server) => {
  const primus = require("primus")(server, {
    transformer: "websockets",
  });

  primus.on("connection", (spark) => {
    console.log("connected 🔥");
  });
};
