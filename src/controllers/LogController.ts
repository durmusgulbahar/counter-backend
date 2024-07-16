import { prismaClient } from '../utils/prismaClient'
import { Request, Response } from 'express';

export const getAllLogs = async (req: Request, res: Response) => {
    try {
        
        const logs = await prismaClient.log.findMany();

        res.status(200).send(logs);
       

    } catch (error) {
        console.log("Error :", error)
        res.status(500).json({ error: "Internal Server Error" }); // Don't send raw errors
    } finally {
        await prismaClient.$disconnect();
    }
}