const stationModel = require("../models/stations.model");

module.exports = {
  getById: (req, res, next) => {
    console.log(req.body);
    stationModel.findById(req.params.stationId, (err, stationInfo) => {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "Station found!!!",
          data: { stations: stationInfo }
        });
      }
    });
  },

  getAll: (req, res, next) => {
    let radioStations = [];
    stationModel.find({}, (err, stations) => {
      if (err) {
        next(err);
      } else {
        for (let station of stations) {
          radioStations.push({
            id: station._id,
            name: station.name,
            address: station.address
          });
        }
        res.json({
          status: "success",
          message: "Radio stations list found!!!",
          data: { stations: radioStations }
        });
      }
    });
  },

  updateById: (req, res, next) => {
    stationModel.findByIdAndUpdate(
      req.params.stationId,
      { name: req.body.name },
      err => {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "Station updated successfully!!!"
          });
        }
      }
    );
  },

  deleteById: (req, res, next) => {
    stationModel.findByIdAndRemove(req.params.stationId, err => {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "Station deleted successfully!!!"
        });
      }
    });
  },

  create: (req, res, next) => {
    stationModel.create(
      { name: req.body.name, address: req.body.address },
      err => {
        if (err) next(err);
        else
          res.json({
            status: "success",
            message: "Station added successfully!!!"
          });
      }
    );
  }
};
