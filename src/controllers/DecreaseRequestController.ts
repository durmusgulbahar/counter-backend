import { prismaClient } from '../utils/prismaClient'
import { Request, Response } from 'express';
import { log } from '../utils/logs';

export const decreaseRequest = async (req: Request,res: Response) => {
    try {
        const decrease = await prismaClient.value.updateMany({
            data: {
                value: {
                    decrement: 1,
                }
            },
        })
       
        res.status(200).send(`Value decreased successfully!`);
        await log("Value increased successfully!", "decrease");
    } catch (error) {
        console.log("Error :", error)
        res.send(error);
    } finally {
        await prismaClient.$disconnect();
    }
}