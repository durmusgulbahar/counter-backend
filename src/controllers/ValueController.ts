import { prismaClient } from '../prisma/prismaClient'
import { Request, Response } from 'express';

export const getValue = async (req: Request, res: Response) => {
    try {
        const value = await prismaClient.value.findMany();
        console.log("Value :", value);
        res.send(value);
    } catch (error) {
        console.log("Error :", error);
        res.send(error);
    }
    finally{
        await prismaClient.$disconnect();
    }
}

export const test = async (req: Request, res: Response) => {
    try {
        console.log("Test")
        res.send("Test");
    } catch (error) {
        console.log("Error :", error);
        res.send(error);
    }
}