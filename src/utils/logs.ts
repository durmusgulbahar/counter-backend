import { prismaClient } from '../prisma/prismaClient'

export const log = async (message:string, request_type:string) => {
    
    try {
        const l = await prismaClient.log.create({

            data: {
                message: message,
                request_type: request_type,
                createdAt: new Date()
            }
    
        })

        console.log(l)
    } catch (error) {
        console.log(error)
    }
    finally{
        await prismaClient.$disconnect();
    }
}