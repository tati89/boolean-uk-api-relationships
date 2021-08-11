const router = require("express").Router();

const {
  getAllDoctors,
  getDoctorById,
  addDoctor,
  getAppointforDocById,
  deleteDoctor,
  updateDoctorInfo,
} = require("./controller");

router.get("/", getAllDoctors);

router.get("/:id/appointments", getAppointforDocById);

router.get("/:id", getDoctorById);

router.post("/", addDoctor);

router.delete("/:id", deleteDoctor);

router.patch("/:id", updateDoctorInfo);

module.exports = router;
