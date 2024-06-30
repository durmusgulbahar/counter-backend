import express from 'express';
import {getValue,test} from '../controllers/ValueController';

const router = express.Router();

router.get('/value', getValue);
router.get('/test',test);

export default router;