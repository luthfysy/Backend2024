const db = require("../config/database");

class Student {
  static all() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students";

      db.query(query, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students WHERE id = ?";

      db.query(query, [id], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO students SET ?";

      db.query(query, data, (err, result) => {
        if (err) reject(err);
        resolve(result.insertId);
      });
    });
  }

  static update(id, data) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE students SET ? WHERE id = ?";

      db.query(query, [data, id], (err, result) => {
        if (err) reject(err);
        resolve(result.affectedRows > 0);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM students WHERE id = ?";

      db.query(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result.affectedRows > 0);
      });
    });
  }
}

module.exports = Student;
