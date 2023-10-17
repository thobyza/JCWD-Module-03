const router = require('express').Router();

const { expenseController } = require('../controllers');
const { createId, createDate } = require('../middleware/middleware')

router.get("/", expenseController.getAll);
router.get("/total", expenseController.getTotalByCategory);
router.get("/date", expenseController.getTotalByDate);
router.get("/:id", expenseController.getById);

router.post("/", createId, createDate, expenseController.postExpense);
router.delete("/:id", expenseController.deleteById);
router.patch("/:id", expenseController.editById);

module.exports = router