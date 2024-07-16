"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValueController_1 = require("../controllers/ValueController");
const IncreaseRequestController_1 = require("../controllers/IncreaseRequestController");
const DecreaseRequestController_1 = require("../controllers/DecreaseRequestController");
const LogController_1 = require("../controllers/LogController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/value', (req, res) => (0, ValueController_1.getValue)(req, res));
router.post('/increase', (req, res) => (0, IncreaseRequestController_1.increaseRequest)(req, res));
router.post('/decrease', (req, res) => (0, DecreaseRequestController_1.decreaseRequest)(req, res));
router.get('/test', (req, res) => (0, ValueController_1.test)(req, res));
router.get('/log', (req, res) => (0, LogController_1.getAllLogs)(req, res));
exports.default = router;
