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
exports.decreaseRequest = void 0;
const prismaClient_1 = require("../utils/prismaClient");
const logs_1 = require("../utils/logs");
const decreaseRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decrease = yield prismaClient_1.prismaClient.value.updateMany({
            data: {
                value: {
                    decrement: 1,
                }
            },
        });
        res.status(200).send(`Value decreased successfully!`);
        yield (0, logs_1.log)("Value increased successfully!", "decrease");
    }
    catch (error) {
        console.log("Error :", error);
        res.send(error);
    }
    finally {
        yield prismaClient_1.prismaClient.$disconnect();
    }
});
exports.decreaseRequest = decreaseRequest;
