import express from 'express';
import {getValue,test} from '../controllers/ValueController';
import { increaseRequest } from '../controllers/IncreaseRequestController';
import { decreaseRequest } from '../controllers/DecreaseRequestController';
const router = express.Router();

router.get('/value', getValue);
router.post('/increase', increaseRequest)
router.post('/decrease',decreaseRequest)
router.get('/test',test);

export default router;