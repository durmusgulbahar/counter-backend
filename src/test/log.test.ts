import { prismaClient } from '../prisma/prismaClient'
import { Request, Response } from 'express';
import app from '../index';
import request from "supertest";

test('number', async () => {

    expect(1 + 3).toEqual(4);
})