import { prismaClient } from '../utils/prismaClient'
import { Request, Response } from 'express';

export const getValue = async (req: Request, res: Response) => {
 
    try {
        const value = await prismaClient.value.findFirst();
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
        res.json({msg:"Test"});
    } catch (error) {
        console.log("Error :", error);
        res.json({error:error});
    }
}