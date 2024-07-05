import { prismaClient } from '../prisma/prismaClient'
import { Request, Response } from 'express';

export const increaseRequest = async (req: Request, res: Response) => {
    try {
        const increase = await prismaClient.value.updateMany({
            data: {
                value: {
                    increment: 1,
                }
            },
        })

        res.status(200).send(`Value increased successfully!`);

    } catch (error) {
        console.log("Error :", error)
        res.status(500).json({ error: "Internal Server Error" }); // Don't send raw errors
    } finally {
        await prismaClient.$disconnect();
    }
}