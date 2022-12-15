import { create } from "venom-bot";

create({
  Sesi: "class-hamster", //name of Sesi
})
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === ".tt" || message.body === ".timetable") {
      client
        .sendImage(
          message.from,
          "./assets/timetable.png",
          "undefined",
          "Here's the full timetable!"
        )
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }

    if (message.body === ".tdy" || message.body === ".today") {
      function todaysSchedule() {
        const date = new Date();

        let day = date.getDay();

        if (date.getHours() > 13) {
          // If it's after 1 o'clock, show the schedule for the next day.
          day++;
        }

        if (day === 0 || day === 6) {
          return "You have no lessons today!";
        } else if (day === 1) {
          return "*Ilmu Pengetahuan Alam*\n┕ Guru: Mr. Baskoro\n┕ Sesi: 07:30 - 08:15\n\n*Ilmu Pengetahuan Sosial*\n┕ Guru: Ms. Mega\n┕ Sesi: 09:30 - 11:00\n\n*Seni Rupa Budaya*\n┕ Guru: Mr. Bagus\n┕ Sesi: 11:00 - 12:30";
        } else if (day === 2) {
          return "*Pendidikan Kewarganegaraan*\n┕ Guru: Ms. Risma\n┕ Sesi: 07:30 - 08:15\n\n*Bahasa Indonesia*\n┕ Guru: Ms. Kris\n┕ Sesi: 09:30 - 10:15\n\n*Ilmu Pengetahuan Sosial*\n┕ Guru: Ms. Mega\n┕ Sesi: 10:15 - 11:00\n\n*Matematika*\n┕ Guru: Ms. Eka\n┕ Sesi: 11:00 - 12:30";
        } else if (day === 3) {
          return "*Bahasa Inggris*\n┕ Guru: Ms. Ririn\n┕ Sesi: 07:30 - 08:15\n\n*Prakarya*\n┕ Guru: Mr. Digdo\n┕ Sesi: 09:30 - 11:00\n\n*Ilmu Pengetahuan Alam*\n┕ Guru: Mr. Baskoro\n┕ Sesi: 11:00 - 12:30";
        } else if (day === 4) {
          return "*Bahasa Indonesia*\n┕ Guru: Ms. Kris\n┕ Sesi: 07:30 - 08:15\n\n*Seni Rupa Musik*\n┕ Guru: -\n┕ Sesi: 09:30 - 11:00\n\n*Matematika*\n┕ Guru: Ms. Eka\n┕ Sesi: 11:00 - 12:30";
        } else if (day === 5) {
          return "*Pendidikan Jasmani*\n┕ Guru: Ms. Intan\n┕ Sesi: 07:30 - 08:15\n\n*Bahasa Inggris*\n┕ Guru: Ms. Ririn\n┕ Sesi: 09:30 - 11:00\n\n*Studi Alkitab*\n┕ Guru: Ms. Nikita\n┕ Sesi: 11:00 - 12:30";
        }
      }

      client
        .sendText(message.from, todaysSchedule())
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }

    if (message.body === ".h" || message.body === ".help") {
      client
        .sendText(
          message.from,
          "Halo! Nama saya George, hamster peliharaan kelas. Saya adalah chatbot yang berjalan dengan nomor Jason untuk membantu tugas harian Anda. Ini adalah perintah yang tersedia:\n\n.help (.h) - Menampilkan menu ini\n.today (.tdy) - Menampilkan jadwal hari ini atau besok\n.timetable (.tt) - Menampilkan jadwal penuh untuk semester ini.\n\n ℹ️ Tahukah Anda? Bot ini open-source, dan kodenya tersedia di https://github.com/8genius/class-hamster"
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
