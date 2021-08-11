const { appointment, doctor } = require("../../utils/dbClient");

const getAllAppointments = async (req, res) => {
  try {
    const data = await appointment.findMany();
    res.json({ data: data });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createAppointment = async (req, res) => {
  const { doctorId, practiceName, reason } = req.body;
  console.log(doctorId);

  try {
    const newApp = {
      practiceName: practiceName,
      reason: reason,
    };
    const created = await appointment.create({
      data: {
        ...newApp,
        doctor: { connect: { id: Number(doctorId) } },
      },
    });

    res.json({ created: created });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteAppointment = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const deleted = await appointment.delete({
      where: {
        id,
      },
    });
    res.json({ deleted: deleted });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updateAppointment = async (req, res) => {
  const id = parseInt(req.params.id);
  const updateInfo = req.body;

  try {
    const found = await appointment.findUnique({
      where: {
        id,
      },
    });

    if (found) {
      const updated = await appointment.update({
        where: {
          id,
        },
        data: {
          ...found,
          ...updateInfo,
        },
      });
      res.json({ updated: updated });
    } else {
      res.json({ msg: `ID ${id} not found` });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  getAllAppointments,
  createAppointment,
  deleteAppointment,
  updateAppointment,
};
