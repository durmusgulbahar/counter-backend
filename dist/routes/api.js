"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ValueController_1 = require("../controllers/ValueController");
const IncreaseRequestController_1 = require("../controllers/IncreaseRequestController");
const DecreaseRequestController_1 = require("../controllers/DecreaseRequestController");
const router = express_1.default.Router();
router.get('/value', ValueController_1.getValue);
router.post('/increase', IncreaseRequestController_1.increaseRequest);
router.post('/decrease', DecreaseRequestController_1.decreaseRequest);
router.get('/test', ValueController_1.test);
exports.default = router;
