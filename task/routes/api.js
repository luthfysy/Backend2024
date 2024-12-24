// Import Express dan StudentController
const express = require("express");
const StudentController = require("../controllers/StudentController");

// Membuat Router
const router = express.Router();

// Routes CRUD Students
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// Export Router
module.exports = router;
