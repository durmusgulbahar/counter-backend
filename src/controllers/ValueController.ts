import { prismaClient } from '../prisma/prismaClient'


const getValue = async () => {
    try {
        const value = await prismaClient.value.findMany();
        console.log("Value :", value);
    } catch (error) {
        console.log("Error :", error);
    }
    finally{
        await prismaClient.$disconnect();
    }
}