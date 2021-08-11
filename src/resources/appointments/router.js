const router = require("express").Router();

const {
  getAllAppointments,
  createAppointment,
  deleteAppointment,
  updateAppointment,
} = require("./controller");

router.get("/", getAllAppointments);

router.post("/", createAppointment);

router.delete("/:id", deleteAppointment);

router.patch("/:id", updateAppointment);

module.exports = router;
