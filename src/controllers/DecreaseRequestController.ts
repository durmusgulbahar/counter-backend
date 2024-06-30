import { prismaClient } from '../prisma/prismaClient'
import { Request, Response } from 'express';

export const decreaseRequest = async (req: Request,res: Response) => {
    try {
        const increase = await prismaClient.value.updateMany({
            data: {
                value: {
                    decrement: 1,
                }
            },
        })
       
        res.send(`Value decreased successfully!`);

    } catch (error) {
        console.log("Error :", error)
        res.send(error);
    } finally {
        await prismaClient.$disconnect();
    }
}