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
          "./assets/timetable.jpg",
          "undefined",
          "Nih, jadwal untuk minggu ini!"
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
          "Halo! Nama saya George, hamster peliharaan kelas. Saya adalah chatbot yang berjalan dengan nomor Jason untuk membantu tugas harian Anda. Ini adalah perintah yang tersedia:\n\n.help / .h - Menampilkan menu ini\n.today / .tdy - Menampilkan jadwal hari ini atau besok\n.timetable / .tt - Menampilkan jadwal penuh untuk semester ini.\n.calendar / .cal - Menampilkan kalender akademik untuk semester ini.\n.month / .mo - Menampilkan acara-acara di bulan ini.\n\n ℹ️ Tahukah Anda? Bot ini open-source, dan kodenya tersedia di https://github.com/8genius/class-hamster"
        )
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }

    if (message.body === ".cal" || message.body === ".calendar") {
      client
        .sendImage(
          message.from,
          "./assets/calendar.jpg",
          "undefined",
          "Nih, kalender akademik untuk semester ini!"
        )
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }

    if (message.body === ".mo" || message.body === ".month") {
      function thisMonth() {
        const sch = [
          {
            period: "Januari 2023",
            events: [
              "1-4 - *Libur tahun baru*",
              "5 - *Balik ke sekolah*",
              "5 - *Ulang tahun Celyn!*",
              "12 - *Ulang tahun Amanda!*",
              "15 - *Ulang tahun Rachel!*",
              "22 - *Tahun baru Imlek*",
              "22-24 - *Libur Imlek*",
              "26 - *Perayaan tahun baru Imlek*",
            ],
          },
          {
            period: "Februari 2023",
            events: [
              "9 - *Ulang tahun Glenn!*",
              "11 - *Ulang tahun Emily!*",
              "14 - *Ulang tahun Berry!*",
              "21 - *Pameran sains*",
              "25 - *Ulang tahun Kathy!*",
            ],
          },
          {
            period: "Maret 2023",
            events: [
              "9 - *Ulang tahun Evan!*",
              "17 - *Laporan perkembangan*",
              "17 - *Music concert*",
              "20-24 - *US SMP (Prediksi)*",
              "20-24 - *Libur tengah semester*",
            ],
          },
          {
            period: "April 2023",
            events: [
              "6-7 - *Jumat Agung*",
              "12 - *Perayaan Paskah*",
              "18 - *Ulang tahun Mr. Digdo!*",
              "20-28 - *Libur Idul Fitri*",
              "25 - *Ulang tahun Cinta!*",
              "25 - *Ulang tahun Michael!*",
            ],
          },
          {
            period: "Mei 2023",
            events: [
              "1 - *Libur hari Buruh (Labor Day)*",
              "7 - *Ulang tahun Gerald!*",
              "18 - *Libur hari Kenaikan (Ascension Day)*",
            ],
          },
          {
            period: "Juni 2023",
            events: [
              "1 - *Hari Pancasila*",
              "3 - *Ulang tahun Davenli!*",
              "5-6 - *Hari persahabatan (Friendship Day)*",
              "10 - *Pengucapan syukur lulusan (Graduates Thanksgiving)*",
              "12 - *Ulang tahun Jonathan!*",
              "14 - *Perpisahan kelas + Pesta potluck*",
              "15 - *Apresiasi orang tua + Kartu raport*",
              "16-30 - *Libur akhir semester*",
              "21 - *Ulang tahun Millian!*",
              "29 - *Ulang tahun Jennifer!*",
              "30 - *Ulang tahun Ms. Risma!*",
            ],
          },
          {
            period: "Juli 2022",
            events: [],
          },
          {
            period: "Agustus 2022",
            events: [],
          },
          {
            period: "September 2022",
            events: [],
          },
          {
            period: "Oktober 2022",
            events: [],
          },
          {
            period: "November 2022",
            events: [],
          },
          {
            period: "December 2022",
            events: [
              "5-6 - *Hari persahabatan (Friendship Day)*",
              "12 - *Lagu-lagu natal (Christmas Carol)*",
              "13 - *Perayaan natal + pesta potluck*",
              "14 - *Hari resolusi*",
              "15 - *Kartu raport*",
              "16-31 - *Libur akhir tahun*",
              "17 - *Ulang tahun Sergio!*",
            ],
          },
        ];

        const date = new Date();

        const month = date.getMonth();

        return `Ini adalah acara-acara di ${sch[month].period}.\n\n${sch[
          month
        ].events.join("\n")}`;
      }

      client
        .sendText(message.from, thisMonth())
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }
  });
}
