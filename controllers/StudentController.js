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

  // Mendapatkan satu resource berdasarkan ID
  async show(req, res) {
    const { id } = req.params;
    try {
      const student = await Student.findById(id);
      if (!student) {
        return res.status(404).json({
          message: `Student dengan ID ${id} tidak ditemukan`,
        });
      }
      res.json({
        message: `Menampilkan data student dengan ID ${id}`,
        data: student,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error mendapatkan data student",
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
        message: "Menambahkan data student baru",
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

  // Memperbarui data student
  async update(req, res) {
    const { id } = req.params;
    const { nama, nim, email, jurusan } = req.body;

    try {
      const updated = await Student.update(id, { nama, nim, email, jurusan });
      if (!updated) {
        return res.status(404).json({
          message: `Student dengan ID ${id} tidak ditemukan`,
        });
      }
      res.json({
        message: `Memperbarui data student dengan ID ${id}`,
        data: { id, nama, nim, email, jurusan },
      });
    } catch (error) {
      res.status(500).json({
        message: "Error memperbarui data student",
        error: error.message,
      });
    }
  }

  // Menghapus data student
  async destroy(req, res) {
    const { id } = req.params;

    try {
      const deleted = await Student.delete(id);
      if (!deleted) {
        return res.status(404).json({
          message: `Student dengan ID ${id} tidak ditemukan`,
        });
      }
      res.json({
        message: `Menghapus data student dengan ID ${id}`,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error menghapus data student",
        error: error.message,
      });
    }
  }
}

const object = new StudentController();
module.exports = object;
