const { doctor } = require("../../utils/dbClient");

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await doctor.findMany();
    res.json({ data: doctors });
  } catch (error) {
    res.jso({ error: error.message });
  }
};

const getDoctorById = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const foundDoctor = await doctor.findUnique({
      where: {
        id: id,
      },
    });
    res.json({ data: foundDoctor });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const addDoctor = async (req, res) => {
  const newDoctor = req.body;

  try {
    const created = await doctor.create({
      data: newDoctor,
    });
    res.json({ created: created });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getAppointforDocById = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const foundDocWithAppoints = await doctor.findMany({
      where: {
        id: id,
      },
      include: {
        appointments: true,
      },
    });
    res.json({ appointments: foundDocWithAppoints });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteDoctor = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const doc = await doctor.delete({
      where: {
        id: id,
      },
    });
    res.json({ deleted: doc });
  } catch (error) {
    res.json({ error: error.message });
  }
};

async function updateDoctorInfo(req, res) {
  const id = Number(req.params.id);
  const updateInfo = req.body;

  try {
    const exict = await doctor.findUnique({
      where: {
        id,
      },
    });

    if (exict) {
      const updated = await doctor.update({
        where: {
          id,
        },
        data: {
          ...exict,
          ...updateInfo,
        },
      });
      res.json({ data: updated });
    }
    res.json({ msg: `ID ${id} doesn't exict` });
  } catch (error) {
    res.json({ error: error.message });
  }
}

module.exports = {
  getAllDoctors,
  getDoctorById,
  addDoctor,
  getAppointforDocById,
  deleteDoctor,
  updateDoctorInfo,
};
