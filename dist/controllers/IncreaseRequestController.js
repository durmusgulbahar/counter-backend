"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.increaseRequest = void 0;
const prismaClient_1 = require("../prisma/prismaClient");
const logs_1 = require("../utils/logs");
const increaseRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const increase = yield prismaClient_1.prismaClient.value.updateMany({
            data: {
                value: {
                    increment: 1,
                }
            },
        });
        res.status(200).send(`Value increased successfully!`);
        yield (0, logs_1.log)("Value increased successfully!", "increase");
    }
    catch (error) {
        console.log("Error :", error);
        res.status(500).json({ error: "Internal Server Error" }); // Don't send raw errors
    }
    finally {
        yield prismaClient_1.prismaClient.$disconnect();
    }
});
exports.increaseRequest = increaseRequest;
