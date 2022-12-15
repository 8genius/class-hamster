import { create } from "venom-bot";

create({
  session: "class-hamster", //name of session
})
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === ".tt" || ".timetable") {
      client
        .sendImage(
          message.from,
          "./assets/timetable.png",
          "undefined",
          "Full timetable"
        )
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }
  });
}
