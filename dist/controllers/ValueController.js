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
exports.test = exports.getValue = void 0;
const prismaClient_1 = require("../prisma/prismaClient");
const getValue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = yield prismaClient_1.prismaClient.value.findMany();
        console.log("Value :", value);
        res.send(value);
    }
    catch (error) {
        console.log("Error :", error);
        res.send(error);
    }
    finally {
        yield prismaClient_1.prismaClient.$disconnect();
    }
});
exports.getValue = getValue;
const test = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("Test");
    }
    catch (error) {
        console.log("Error :", error);
        res.send(error);
    }
});
exports.test = test;
