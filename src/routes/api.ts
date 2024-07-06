import {Request, Response} from 'express';
import {getValue,test} from '../controllers/ValueController';
import { increaseRequest } from '../controllers/IncreaseRequestController';
import { decreaseRequest } from '../controllers/DecreaseRequestController';
import { getAllLogs } from '../controllers/LogController';
import express from 'express';
const router = express.Router();

router.get('/value', (req: Request, res: Response) => getValue(req, res));
router.post('/increase', (req: Request, res:Response) => increaseRequest(req,res));
router.post('/decrease', (req: Request, res:Response) => decreaseRequest(req,res));
router.get('/test',(req: Request, res:Response) => test(req,res));
router.get('/log',(req: Request, res:Response) =>getAllLogs(req,res));

export default router;