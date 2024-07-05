import { prismaClient } from '../prisma/prismaClient'
import { Request, Response } from 'express';

export const log = async (req: Request, res: Response) => {
    
    try {
        const l = await prismaClient.log.create({

            data: {
                message: "Test log",
                request_type: "Increase",
                createdAt: new Date()
            }
    
        })

        res.send(l);
    } catch (error) {
        res.send(error);
    }
    finally{
        await prismaClient.$disconnect();
    }
}

const log_test = async (req:Request, res:Response) => {
    const { request_type } = req.body;
    try {
        const l = await prismaClient.log.create({

            data: {
                message: "Test log",
                request_type: request_type,
                createdAt: new Date()
            }
    
        })

        res.send(l);
    } catch (error) {
        res.send(error);
    }
    finally{
        await prismaClient.$disconnect();
    }
}