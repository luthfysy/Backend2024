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

static create(data) {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO students SET ?";

        db.query(query, data, (err, result) => {
            if (err) {
                reject(err); // Jika error, kembalikan reject
                return;
            }
            resolve(result.insertId); // Kembalikan insertId
        });
    });
}

}

module.exports = Student;
