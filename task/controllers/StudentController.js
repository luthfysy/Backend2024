// Import data students
const students = require("../data/students");

class StudentController {
  // Menampilkan semua data students
  index(req, res) {
    const data = {
      message: "Menampilkan data students",
      data: students,
    };
    res.json(data);
  }

  // Menambahkan data student
  store(req, res) {
    const { name } = req.body;
    const id = students.length ? students[students.length - 1].id + 1 : 1; // Auto-increment ID
    const newStudent = { id, name };
    students.push(newStudent); // Menambahkan student baru ke array

    const data = {
      message: `Menambahkan data student ${name}`,
      data: students,
    };
    res.json(data);
  }

  // Mengupdate data student berdasarkan ID
  update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const student = students.find((s) => s.id === parseInt(id)); // Mencari student berdasarkan ID

    if (student) {
      student.name = name; // Update nama student
      const data = {
        message: `Mengedit student id ${id}, nama ${name}`,
        data: students,
      };
      res.json(data);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  }

  // Menghapus data student berdasarkan ID
  destroy(req, res) {
    const { id } = req.params;
    const index = students.findIndex((s) => s.id === parseInt(id)); // Mencari index student berdasarkan ID

    if (index !== -1) {
      students.splice(index, 1); // Menghapus student dari array
      const data = {
        message: `Menghapus student id ${id}`,
        data: students,
      };
      res.json(data);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  }
}

// Membuat object StudentController
const studentController = new StudentController();
module.exports = studentController;
