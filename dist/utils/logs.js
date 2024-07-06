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
exports.log = void 0;
const prismaClient_1 = require("../prisma/prismaClient");
const log = (message, request_type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const l = yield prismaClient_1.prismaClient.log.create({
            data: {
                message: message,
                request_type: request_type,
                createdAt: new Date()
            }
        });
        console.log(l);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield prismaClient_1.prismaClient.$disconnect();
    }
});
exports.log = log;
