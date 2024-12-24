// Import express dan routing
const express = require("express");
const router = require("./routes/api.js");

// Membuat object express
const app = express();

// Menggunakan middleware untuk parsing request body
app.use(express.json()); // Parsing JSON
app.use(express.urlencoded({ extended: true })); // Parsing form data

// Menggunakan routing (router)
app.use("/api", router); // Menambahkan prefix '/api' untuk semua routes

// Mendefinisikan port.
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
