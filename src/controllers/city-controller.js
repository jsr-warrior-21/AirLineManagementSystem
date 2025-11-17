const { CityService } = require("../services/index");
/*
 * POST
 * data-> req.body
 *
 */

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "succesfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.json({
      data: {},
      message: "not able to create City",
      success: false,
      err: error,
    });
  }
};

// DELETE. -> /city/:id

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "succesfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.json({
      data: {},
      message: "not able to delete the City",
      success: false,
      err: error,
    });
  }
};

// GET-> /city/:id

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "succesfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.json({
      data: {},
      message: "not able to get the City",
      success: false,
      err: error,
    });
  }
};

// PATCH -> /city/:id -> req.body

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "succesfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.json({
      data: {},
      message: "not able to update  the City",
      success: false,
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
};
