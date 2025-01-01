const Student = require("../models/Student");

class StudentController {
  // Mendapatkan seluruh resource
  async index(req, res) {
    try {
      const students = await Student.all();
      const data = {
        message: "Menampilkan data students",
        data: students,
      };

      res.json(data);
    } catch (error) {
      res.status(500).json({
        message: "Error mendapatkan data students",
        error: error.message,
      });
    }
  }

  // Menyimpan data baru ke database
  async store(req, res) {
    const { nama, nim, email, jurusan } = req.body;

    try {
      const studentId = await Student.create({ nama, nim, email, jurusan });
      const data = {
        message: `Menambahkan data student baru`,
        data: { id: studentId, nama, nim, email, jurusan },
      };

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Error menambahkan data student",
        error: error.message,
      });
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
