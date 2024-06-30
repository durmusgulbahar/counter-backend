"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ValueController_1 = require("../controllers/ValueController");
const router = express_1.default.Router();
router.get('/value', ValueController_1.getValue);
router.get('/test', ValueController_1.test);
exports.default = router;
