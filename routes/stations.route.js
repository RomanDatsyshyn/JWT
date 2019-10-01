const express = require("express");
const router = express.Router();
const stationController = require("../controllers/stations.controller");

// @route   GET stations/
// @desc    Show all stations
// @access  Public
router.get("/", stationController.getAll);

// @route   POST stations/
// @desc    Add new stations
// @access  Privat
router.post("/", stationController.create);

// @route   GET stations/:stationId/
// @desc    Show station by Id
// @access  Public
router.get("/:stationId", stationController.getById);

// @route   PUT stations/:stationId/
// @desc    Update information about station
// @access  Privat
router.put("/:stationId", stationController.updateById);

// @route   DELETE stations/:stationId/
// @desc    Delete station by Id
// @access  Privat
router.delete("/:stationId", stationController.deleteById);

module.exports = router;
